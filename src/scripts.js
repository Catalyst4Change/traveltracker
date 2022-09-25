// imports // *include images
import './css/styles.css'
import './images/turing-logo.png'
import './images/emmet-mugshot.png'
import Traveler from './Traveler'
import Trip from './Trip'
import { 
  fetchAllTravelers,
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
  postNewTrip,
  postNewDestination,
  postDeleteTrip
} from "./APIcalls"

// global variables //
let currentTraveler
let currentUsersTrips
let allTripsData
let destinationsData

// temporary post data //
const fakeUserID = 7

// dom getters
const userInfoPane = document.getElementById('user-info-pane')
const tripRequestPane = document.getElementById('trip-request-pane')
const tripStartDate = document.getElementById('trip-start')
const tripDuration = document.getElementById('duration')
const numTravelersSelect = document.getElementById('travelers')
const destinationsSelect = document.getElementById('destinations-select')
const estTripCost = document.getElementById('estimated-trip-cost')
const tripRequestSubmitButton = document.getElementById('submit-trip-request-button')
const tripDisplayPane = document.getElementById('display-pane')

const elementName = document.getElementById('element-name')


// const today = () => {
//   let today = new Date()
//   const dd = String(today.getDate()).padStart(2, '0')
//   const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
//   const yyyy = today.getFullYear()
  
//   today = yyyy + '/' + dd + '/' + mm
//   return today
// }

const displayTravelerInfo = (currentTraveler, annualTripExpense) => {
  userInfoPane.innerHTML = `
  <article class="row">
  <img src="./src/images/emmet-mugshot.png">
  <div class="center">
    <h1>${currentTraveler.name}</h1>
    <h2>Travel expenses this year: $${annualTripExpense + Math.round(annualTripExpense/10)}*</h2>
    <p>*Includes $${Math.round(annualTripExpense/10)} paid to your travel agent.</p>
  </div>
  </article>
  `
}

const populateTripRequestForm = (destinationsData) => {
  const destinationsAlphabetical = destinationsData.sort((a,b) => b.destination < a.destination) 
  destinationsAlphabetical.forEach(dest => {
    destinationsSelect.innerHTML += `
  <option value="${dest.id}">${dest.destination}</option>
  `
  })
}

const updateTripCost = () => {
  const selectedDest = destinationsData.find(dest => dest.id === parseInt(destinationsSelect.value))
  const flightCost = selectedDest.estimatedFlightCostPerPerson
  const perDiem = selectedDest.estimatedLodgingCostPerDay
  const numDays = tripDuration.value
  const numTravelers = numTravelersSelect.value
  const subTotal = perDiem * numDays + numTravelers * flightCost
  const agentCut = subTotal/10
  const totalTripCost = subTotal + agentCut
  estTripCost.innerText = `$${totalTripCost}`
}
tripRequestPane.addEventListener('change', updateTripCost)

const submitTripRequest = (event) => {
  event.preventDefault()
  const tripID = allTripsData.length + 1
  const formatedDate = tripStartDate.value.replaceAll('-', '/')

  const newTripRequest = {
    "id": tripID,
    "userID": currentTraveler.id,
    "destinationID": parseInt(destinationsSelect.value),
    "travelers": parseInt(numTravelersSelect.value),
    "date": formatedDate,
    "duration": parseInt(tripDuration.value),
    "status": "pending",
    "suggestedActivities": []
  }
  console.log(newTripRequest);
  postNewTrip(newTripRequest)
  fetchRemoteData()
}
tripRequestSubmitButton.addEventListener('click', submitTripRequest)

const displayAllTrips = (trips) => {
  tripDisplayPane.innerHTML = ''
  trips.sort((a,b) => b.numericDate - a.numericDate).forEach(trip => {
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
        <p id="trip-status">Status: ${trip.status}</p>
        <p>${trip.suggestedActivities}</p>
      </article>
    `
  })
}

const populateTravelerDashboard = () => {
  const annualTripExpense = currentTraveler.calculateAnnualTripExpenses(currentUsersTrips, destinationsData)
  displayAllTrips(currentUsersTrips)
  displayTravelerInfo(currentTraveler, annualTripExpense)
  populateTripRequestForm(destinationsData)
}

const fetchRemoteData = () => {
  Promise.all([
    fetchSingleTravelerByID(fakeUserID),
    fetchAllTrips(),
    fetchAllDestinations(),
    ])
    .then(data => {
      currentTraveler = new Traveler(data[0])
      allTripsData = data[1].trips
      const tripsByTravelerID = data[1].trips.filter(trip => trip.userID === fakeUserID)
      currentUsersTrips = tripsByTravelerID.map(trip => new Trip(trip))
      destinationsData = data[2].destinations
    })
    .then(() => {
      populateTravelerDashboard()
    })
}
window.addEventListener('load', fetchRemoteData)
