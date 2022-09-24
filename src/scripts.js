// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import './images/turing-logo.png'
import { 
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
} from "./APIcalls";
import Traveler from './Traveler';
import Trip from './Trip';




// An example of how you tell webpack to use an image
// (also need to link to it in the index.html)


// global variables //
let currentTraveler
let currentUsersTripsData
let destinationsData
let currentTravelersTrips

// temporary post data //
const fakeUserID = 7

const tripDisplayPane = document.getElementById('display-pane')
/*

*/
const showAllTrips = (trips) => {
  trips.forEach(trip => {
    const destination = destinationsData.find(dest => dest.id === trip.destinationID)
    tripDisplayPane.innerHTML += `
    <article>
        <img class="destination-image" 
        src="${destination.image}" 
        alt="${destination.alt}">
        <h3>${destination.destination}</h3>
        <p>Date: ${trip.date}</p>
        <p>${trip.duration} Days</p>
        <p>Travelers: ${trip.travelers}</p>
        <p>Reference number: ${trip.id}</p>
        <p>Status: ${trip.status}</p>
        <p>${trip.suggestedActivities}</p>
      </article>
    `
  })
  // trips.reduce((acc,trip) => {
  //   acc += "Destination: " + destinationsData.find(dest => dest.id === trip.destinationID).destination
  //   console.log(acc)
  //   return acc
  // },"")
}


const populateTravelerDashboard = () => {
  showAllTrips(currentTravelersTrips)
  
  // const annualTripExpense = currentTraveler.calculateAnnualTripExpenses(currentUsersTripsData)
  // add to dom
}
// fetch calls

const fetchRemoteData = () => {
  Promise.all([
    fetchSingleTravelerByID(fakeUserID),
    fetchAllTrips(),
    fetchAllDestinations(),
    ])
    .then(data => {
      currentTraveler = new Traveler(data[0])
      currentTravelersTrips = data[1].trips.filter(trip => trip.userID === fakeUserID)
      console.log(currentTravelersTrips)
      currentUsersTripsData = currentTravelersTrips.map(trip => new Trip(trip))
      destinationsData = data[2].destinations
    })
    .then(() => {
      // call dom manipulators
      populateTravelerDashboard()
    })
}
window.addEventListener('load', fetchRemoteData)


// fetch calls
