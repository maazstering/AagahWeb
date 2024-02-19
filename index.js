const e = require('express');
const express = require('express');
const app = express();
const mongoose = require ('mongoose');


app.use(express.json());
app.use(express.urlencoded)

(async ()=> {
    try{
        await mongoose.connect("mongodb://localhost:27017/test")
        console.log("Connection has been established suscessfully")
        } catch(error){
            console.error('unable to connect to the database:', error);
        }
})()

const router = require('./routes/index');
app.use('/', router);

app.use(function(req,res,next){
    next(createError(404));
})

const port =3000


app.listen(port, () => {
    console.log(`Server running port ${port}`)
})