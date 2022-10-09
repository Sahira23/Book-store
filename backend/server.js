const express=require('express');
const app=express();
// 1.import mongoose
const mongoose=require('mongoose')
// 3. import dotenv
const dotenv=require('dotenv')
dotenv.config();
// 4.server.js is not aware of router.js make it
// when the post request is made it gets to server.js first
// then server.js sends it to router.js
// router.js fills datas according to schema
const routesurl=require('./routes/router')
// 7.
const cors=require('cors')

// 2.use connect function to connect to mongodb
// second argument is callback function 
mongoose.connect(process.env.DATABASE_ACCESS,()=>{console.log("database connected")})
// 6.we have to activate body parser in our application
app.use(express.json());
// 8.initialize cors
app.use(cors())
// 5.initialize routes as middleware
// first argument is base path
// second argument is route
app.use('/app',routesurl)



app.listen(8000,()=>{console.log("server is up and running")})