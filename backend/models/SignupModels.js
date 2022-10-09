const mongoose=require('mongoose')


const signupTemplate=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    // will be accessible only at the backend
    date:{
         type:Date,
         default:Date.now
    },
})
// first argument will be the name of our table
// second argument will be the name of our Schema
module.exports=mongoose.model('mytable',signupTemplate)