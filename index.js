const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Port = process.env.Port || 5000;
const courseDetails = require('./Data/course.json');

app.get("/",(req,res)=> {
    res.send(courseDetails);
})

app.get("/course/:id",(req,res)=> {
    const id = req.params.id;
    res.send(courseDetails.find(element => element.id == id ));
})

app.listen(Port, ()=> {
    console.log('server is running', Port);
})

module.exports = app;
