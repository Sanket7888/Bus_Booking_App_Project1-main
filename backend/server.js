const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

//config
dotenv.config({path:"backend/config/config.env"})

//connecting to database
connectDatabase()

const server = app.listen(process.env.PORT,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log(`Process is running on localhost: ${process.env.PORT}`)
})

