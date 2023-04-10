const express = require("express");
const app= express();

const port = 8000;
app.get("/", (req, res)=>{
    res.send("<h1>Hello World From Express</h1>"); // html responce 
})
app.get("/about", (req, res)=>{
    res.send([
        {
            id:01,
            name:"Numan"
        },
        {
            id:02,
            name:"Ali"
        },
        {
            id:03,
            name:"Sufyan"
        }
    ]);
})
app.listen(port,()=>{
    console.log (`Listening  on port ${port}`);
})