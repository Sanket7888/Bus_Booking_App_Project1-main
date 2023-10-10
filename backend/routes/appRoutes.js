const express = require("express")
const router = express.Router()
const {getAllDistricts, getAllTrips, addTrip, bookTicket, filterTripByDate, filterByQuery} = require("../controllers/appControllers")

router.route("/cities").get(getAllDistricts)
router.route("/date").get(filterTripByDate)
router.route("/filter").get(filterByQuery)
router.route("/trips").get(getAllTrips)
router.route("/trips").post(addTrip)
router.route("/book").post(bookTicket)


module.exports = router