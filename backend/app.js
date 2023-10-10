const express = require("express")
const app= express()
const router = require("./routes/appRoutes")


app.use(express.json())
app.get("/",(req,res)=>{
    res.status(200).json({
        status:"successful",
        Greeting:"Hello GE"
    })
})
app.use("/",router)

module.exports = app