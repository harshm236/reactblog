const express = require("express")
const app = express()
const cors = require("cors")
const data= require("./data")

app.use(cors())
app.get("/api",(req,res)=>{
    res.send(data)
})
app.listen(3030,()=>{
    console.log("server running at 3030")
})