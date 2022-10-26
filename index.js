const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const program = require('./data/programData.json')
app.get('/',(req,res)=>{
    res.send ('news data api run') 
})
app.get('/program',(req,res)=>{
    res.send(program)
})
app.listen(port,()=>{
    console.log('news data run',port)
})