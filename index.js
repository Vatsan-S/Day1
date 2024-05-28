import express from "express";

const app = express();
const PORT = 4000


app.get("/",(req,res)=>{
    // res.status(200).json({message:"Hi all welcome"})
    res.status(200).send(`<div style="background-color:Aqua;color:black">Welcome to the page</div>`)
})
app.get("/data",(req,res)=>{
    res.status(200).send(`<div style="background-color:Aqua;color:black">Welcome to theeeeeeeeeee first page</div>`)
})
app.listen(PORT,()=>{
    console.log(`We are listening  ${PORT}`)
}) 