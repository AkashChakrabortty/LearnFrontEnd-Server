const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Port = process.env.Port || 5000;
const courseDetails = require('./Data/course.json');

app.listen(Port, ()=> {
    console.log('server is running', Port);
})