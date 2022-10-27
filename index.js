const express = require('express');
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const Courses = require('./data/courses.json')
const program = require('./data/programData.json')
app.get('/',(req,res)=>{
    res.send ('news data api run') 
})

app.get('/Courses',(req,res)=>{
    res.send(Courses)
})
app.get('/program',(req,res)=>{
    res.send(program)
})
app.listen(port,()=>{
    console.log('news data run',port)
})