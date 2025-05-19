const express=require('express.js')
const app=express()

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("port is running ");
})