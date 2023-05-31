let myExpress = require('express');

let app = myExpress();

app.use(myExpress.json())

app.listen(3010, function () {

    console.log("server live ho gya")

})