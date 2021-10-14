const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors= require('cors');
const bodyParser = require('body-parser');
const mongoDb=require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDb.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database Connected succesfully');
}).catch((error)=>{
    console.log("got an error :"+error);
});

const bookRoute= require('./backend/routes/book.routes');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cors());

app.use(express.static(path.join(__dirname,'Book')));

app.use('/api',bookRoute);

const port= process.env.port || 3000;
app.listen(port,()=>{
    console.log("listening ");
});

//handling '/' routes 
app.get('/',(req,res)=>{
    res.send('Invalid endpoint! use api route');
})