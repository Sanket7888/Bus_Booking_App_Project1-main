const mongoose = require("mongoose")

const ticketSchema = mongoose.Schema({
    
name:{
    type:String
},
age:{
    type:Number
},
SeatNumber:{
        type:Array
    },
date: {
    type:Number,
    default:Date.now(),
},
from: {
    type:String
},
to:  {
    type:String
},

startTime: {
    type:Date
},
EndTime:  {
    type:Date
},
category:{
    type:String
},

busFare: {
    type:Number
},
busName: {
    type:String
},
bus_no:{
    type: String,
    required:[true,"Please provide bus number"]
}
})

module.exports = mongoose.model("booking",ticketSchema)