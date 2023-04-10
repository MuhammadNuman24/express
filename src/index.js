const { log } = require("console");
const express = require("express");
const path = require("path");
const app= express();
const port = 8000;
// default middleware for static websites rendering
const staticpath= path.join(__dirname ,"../public");
app.use(express.static(staticpath))
app.get("/", (req, res)=>{
    res.send("<h1>Hello World From Express</h1>"); // html responce 
})
app.get("/about", (req, res)=>{
    
})
app.listen(port,()=>{
    console.log (`Listening  on port ${port}`);
})