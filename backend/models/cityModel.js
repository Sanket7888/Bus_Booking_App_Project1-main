const mongoose = require("mongoose")

const citySchema = mongoose.Schema({
    state:{
        type:String,
        required:[true,"Please provide the State name"]
    },
    district:{
        type:String,
        required:[true,"Please provide a valid District name"]
    }
})

module.exports = mongoose.model("state_district",citySchema)

