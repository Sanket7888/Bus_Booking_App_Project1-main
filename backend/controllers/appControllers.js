const Cities = require("../models/cityModel")
const Trips = require("../models/tripModel")
const Ticket = require("../models/newTicketModel")

exports.getAllDistricts = async(req,res,next)=>{
    try{
        const cities = await Cities.find()
    res.status(200).json(cities)
}
    catch(err){
        console.log(`Error: ${err}`)
    }
}
exports.getAllTrips = async (req,res,next)=>{
    try{
        const trips = await Trips.find()
        .select("-_id")
        .sort({date:-1})
        .limit(50)
        res.status(200).json(trips)
    }
        catch(err){
            console.log(`Error: ${err}`)
        }
}
exports.addTrip = async (req,res,next)=>{
    try{
        const newEntry = await Trips.create(req.body)
        res.status(201).json({
            msg:"successfully created",
            newEntry

        })
        
    }
        catch(err){
            console.log(`Error: ${err}`)
        }
}

exports.bookTicket = async (req,res,next)=>{
    try{
        const entry = req.body
        let seat = entry.SeatNumber
        
        let bus = entry.bus_no

        const busDetails = await Trips.findOne({bus_no:bus})
        if(!busDetails){
            res.status(401).json({error: "Bus not found"})
        }
        const updatedSeats = await Trips.findOneAndUpdate({bus_no:bus},
            { $push: { SeatBooked: { $each: seat } } },
            {new:true}
            )
       
      
        const newTicket = await Ticket.create(entry)
        res.status(201).json({
            msg:"successfully booked your ticket",
            newTicket

        })
        
    }
        catch(err){
            console.log(`Error: ${err}`)
        }
}


exports.filterTripByDate = async (req,res,next)=>{
  try  {
    let date = req.query.date;
    console.log(date)
    
 
    const filteredTrips = await Trips.find({date})
    
    
    res.status(201).json(filteredTrips)
}catch(err){
    console.log(`Error: ${err}`)
}
}

exports.filterByQuery = async (req, res) => {
  try {
   
    const { busName, startTime, EndTime, category, from, to, busOwnerID, bus_no} = req.query;

    
    const query = {};

    if (busName) {
      query.busName = busName;
    }

    if (startTime) {
      query.startTime = startTime;
    }

    if (EndTime) {
      query.EndTime = EndTime;
    }
    if (category) {
        query.category = category;
      }
    if (from) {
        query.from = from;
      }
    if (to) {
        query.to = to;
      }
    if (busOwnerID) {
        query.busOwnerID = busOwnerID;
      }
    if (bus_no) {
        query.bus_no = bus_no;
      }
   
    
    const trips = await Trips.find(query);

    res.status(200).json({ success: true, trips });
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};





      

