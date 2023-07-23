let myExpress = require('express');

let app = myExpress();


app.use(myExpress.json())

app.listen(3010, function () {
    console.log("server live ho gya")
})

let multer = require('multer')
let fs = require('fs')

const productPics = multer.diskStorage({
    destination: function (req, file, cb) {
        let path = './server/pics/';

        fs.mkdir(path, function () {
            cb(null, path);
        });
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const productUpload = multer({ storage: productPics });

require("./model/db")

let SignupUsers = require('./model/user')

let Product = require('./model/product')

let token = require('jsonwebtoken');


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

        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})


app.post("/product", productUpload.single("pic"), async (req, res) => {
    try {
        req.body.pic = req.file.originalname

        let existingProduct = await Product.findOne({ sn: req.body.sn });
        
        if (existingProduct) {
            return res.status(400).send("Try with different Serial Number");
        }else if (!existingProduct) {
         
            let newProduct = new Product(req.body)

            await newProduct.save()

            res.send("Product Added");

        }


    } catch (e) {
        console.log(e)
        res.status(500).send("Internal Server Error");
    }
})

app.get('/product', async (req, res) => {

    try {

        let newProduct = await Product.find().sort({ _id: -1 })
        res.json(newProduct)

    } catch (e) {
        console.log(e)

    }
})


// app.use(myExpress.static('./server/build'))
app.use(myExpress.static('./server/pics'))
