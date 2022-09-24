// imports // *include images
import './css/styles.css'
import './images/turing-logo.png'
import { 
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
} from "./APIcalls"
import Traveler from './Traveler'
import Trip from './Trip'

// global variables //
let currentTraveler
let currentUsersTripsData
let destinationsData
let currentTravelersTrips

// temporary post data //
const fakeUserID = 7

// dom getters
const userInfoPane = document.getElementById('user-info-pane')
const tripRequestPane = document.getElementById('trip-request-pane')

const tripDisplayPane = document.getElementById('display-pane')
const tripRequestSubmitButton = document.getElementById('submit-trip-request-input')
const destinationsSelect = document.getElementById('destinations-select')
const numTravelersSelect = document.getElementById('travelers')

const elementName = document.getElementById('element-name')

// event listeners
// tripRequestSubmitButton.addEventListener('click', currentTraveler.submitTripRequest)

const today = () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  today = yyyy + '/' + dd + '/' + mm
  return today
}

const displayTravelerInfo = (currentTraveler, annualTripExpense) => {
  userInfoPane.innerHTML += `
    <article>
      <h1>${currentTraveler.name}</h1>
      <h3>Travel expenses this year: $${annualTripExpense + Math.round(annualTripExpense/10)}*</h3>
      <p>*Includes $${Math.round(annualTripExpense/10)} paid to your travel agent.</p>
    </article>
  `
}




var select = document.getElementById('destinations-select');
var value = select.options[select.selectedIndex].value;
console.log(value);



const updateTripCost = () => {

  const selectedDest = destinationsData.find(dest => dest.id === parseInt(destinationsSelect.value))
  const flightCost = selectedDest.estimatedFlightCostPerPerson
  const perDiem = selectedDest.estimatedLodgingCostPerDay
  const numDays = tripDuration.value
  const numTravelers = numTravelersSelect.value
  estTripCost.innerText = `$${perDiem * numDays + numTravelers * flightCost}`
}
const tripDuration = document.getElementById('duration')
tripRequestPane.addEventListener('change', updateTripCost)

const estTripCost = document.getElementById('estimated-trip-cost')






const populateTripRequestForm = (destinationsData) => {
  //populate destinations
  const destinationsAlphabetical = destinationsData.sort((a,b) => b.destination < a.destination) 
  destinationsAlphabetical.forEach(dest => {
    destinationsSelect.innerHTML += `
  <option value="${dest.id}">${dest.destination}</option>
  `
  })
  // get input values
   console.log(tripDuration.value);


}

const displayTotalTravelExpenses = () => {
  annualTripExpense
}

const displayAllTrips = (trips) => {
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
        <p>Status: ${trip.status}</p>
        <p>${trip.suggestedActivities}</p>
      </article>
    `
  })
}

const populateTravelerDashboard = () => {
  const annualTripExpense = currentTraveler.calculateAnnualTripExpenses(currentTravelersTrips, destinationsData)
  displayAllTrips(currentUsersTripsData)
  displayTravelerInfo(currentTraveler, annualTripExpense)
  populateTripRequestForm(destinationsData)
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
