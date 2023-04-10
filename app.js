const express = require("express");
const app= express();

const port = 8000;
app.get("/", (req, res)=>{
    res.send("Hello World From Express");
})
app.get("/about", (req, res)=>{
    res.status(200), res.send("Wel Come from About Page ");
})
app.listen(port,()=>{
    console.log (`Listening  on port ${port}`);
})