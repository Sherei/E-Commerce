let mongoose= require("mongoose");

let userSchema= mongoose.Schema({
    name: String,
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password:String,
    cpassword:String,
    country:String,
    city:String,
    number:Number,
    // trim:true,
    date:{
        type:Date,
        default:Date.now,
    },
})

let Users= mongoose.model('user', userSchema);

module.exports= Users;