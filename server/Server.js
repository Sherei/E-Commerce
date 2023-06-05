let myExpress = require('express');

let app = myExpress();


app.use(myExpress.json())

app.listen(3010, function () {

    console.log("server live ho gya")

})
let token = require('jsonwebtoken');

require("./model/db")

let SignupUsers = require('./model/user')
let Product = require('./model/product')

app.post('/session-check', async (req, res) => {

    token.verify(req.body.token, "My user", async function (err, dataObj) {
        if (dataObj) {
            let user = await SignupUsers.findById(dataObj.tokenId)
            res.json(user)
        }
    })

})


app.post('/signUp', async (req, res) => {
    try {


        let existingUser = await SignupUsers.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send("User with this email already exists");
        }

        let password = req.body.password;
        let cpassword = req.body.cpassword;

        if (password === cpassword) {
            let newUser = new SignupUsers(req.body);
            await newUser.save();
            res.send("User Created");
        } else {
            res.send("Passwords do not match");
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});


app.post('/login', async (req, res) => {

    try {
        let user = await SignupUsers.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            token.sign({ tokenId: user._id }, "My user", { expiresIn: "1y" }, async (err, myToken) => {

                res.json({ user, myToken })

            })
        } else {
            res.status(404).json({ message: "Invalid credentials" })

            // res.end("Invalid Credentials");
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})


app.post("/product", async (req, res) => {
    try {
        let newProduct = new Product(req.body)

        await newProduct.save()
        res.send("Added")
    } catch (e) {
        console.log(e)
    }
})

app.get('/product', async(req,res)=>{
    try{
        let newProduct= await Product.find()
        res.json(newProduct)
    }catch(e){
        console.log(e)

    }
})