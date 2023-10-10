const mongoose = require("mongoose")

const tripSchema = mongoose.Schema({
date: {
    type:Number
},
from: {
    type:String
},
to:  {
    type:String
},
busOwnerID: {
    type:Number
} ,
startTime: {
    type:Date
},
EndTime:  {
    type:Date
},
category:{
    type:String
},
SeatBooked:{
    type:Array
},
bus_no: {
    type:String
},
animeties_list: {
    type:Array
},
busFare: {
    type:Number
},
busName: {
    type:String
},
})

module.exports = mongoose.model("trip",tripSchema)