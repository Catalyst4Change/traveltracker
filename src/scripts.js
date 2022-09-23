// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { 
  fetchAllTravelers,
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
  postNewTrip,
  postNewDestination,
  postDeleteTrip
} from "./APIcalls";

// An example of how you tell webpack to use an image
// (also need to link to it in the index.html)
import './images/turing-logo.png'


// global variables //
let travelersData = []
let tripsData = []
let destinationsData = []

// temporary post data //
const findByID = 7

const newTrip = {
  id: 420, 
  userID: 69, 
  destinationID: 13, 
  travelers: 6, 
  date: "2022/09/22", 
  duration: 10, 
  status: 'approved', 
  suggestedActivities: ["drinkin", "smokin", "layin low"]
}

const newDestination = {
  id: 51, 
  destination: "The Goddamn Moon", 
  estimatedLodgingCostPerDay: 10000, 
  estimatedFlightCostPerPerson: 100000, 
  image: "src/images/turing-logo.png", 
  alt: "words words words"
}

const deleteTrip = 25

// fetch calls

const fetchRemoteData = () => {
  Promise.all([
    fetchAllTravelers(),
    fetchSingleTravelerByID(findByID),
    fetchAllTrips(),
    fetchAllDestinations(),
    postNewTrip(newTrip),
    postNewDestination(newDestination),
    postDeleteTrip(deleteTrip)
    ])
    .then(data => 
      console.log("all data", data),
      // travelersData = data[0].travelers,
      // console.log("travelersData", travelersData),
      // tripsData = data[1].trips,
      // console.log("tripsdata", tripsData),
      // destinationsData = data[2].destinations
      )
}
fetchRemoteData()

// fetch calls
