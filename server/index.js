import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
const morgan = require('morgan');

require("dotenv").config();

const app=express();

//middleware
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true}))

app.use(cors())


//database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
})

.then(()=> console.log("Database connected! YAA"))
.catch(err=> console.log("Error in Database connection :( =>",err))


//app listener

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`The server is running at port ${port}`));

//routes 
app.post('/api/signup', (req,res)=> {
    console.log("Register Endpoint =>", req.body);
})