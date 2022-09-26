// imports // *include images
import './css/styles.css'
import './images/turing-logo.png'
import './images/morey-flanders.png'
import Traveler from './Traveler'
import Trip from './Trip'
import { 
  fetchAllTravelers,
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
  postNewTrip,
  postNewDestination,
  postModifyTrip,
  postDeleteTrip
} from "./APIcalls"

// global variables //
let currentTraveler
let currentUsersTrips
let allTripsData
let destinationsData

// temporary post data //
const userLoginID = 50

// dom getters
const signIn = document.getElementById('sign-in-screen')
const unserNameInput = document.getElementById('username-input')
const passwordInput = document.getElementById('password-input')
const signInButton = document.getElementById('sign-in-button')
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
const currentTravelerNameDisplay = document.getElementById('current-traveler-name')
const yearlyTravelExpensesDisplay = document.getElementById('yearly-travel-expenses')
const travelAgentCutDisplay = document.getElementById('travel-agent-cut-asterix')

// userInfoPane.classList.add('hidden')
// tripRequestPane.classList.add('hidden')
// tripDisplayPane.classList.add('hidden')
const verifyUserCredentials = (event) => {
  event.preventDefault()
//   if (unserNameInput.value != "traveler50") {
//     alert("Your user name is not recognized. Please try again.")
//   } else if (passwordInput.value != "travel") {
//     alert("Your password is incorrect. Please try again.")
//   } else {
    signIn.classList.add('hidden')
//     userInfoPane.classList.remove('hidden')
//     tripRequestPane.classList.remove('hidden')
//     tripDisplayPane.classList.remove('hidden')
//   }
}
signInButton.addEventListener('click', verifyUserCredentials)

const today = () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  
  today = yyyy + '-' + mm + '-' + dd
  return today
}

const displayTravelerInfo = (currentTraveler, annualTripExpense) => {
  currentTravelerNameDisplay.innerText = `${currentTraveler.name}`
  yearlyTravelExpensesDisplay.innerText = `Travel expenses last 12 months*: $${annualTripExpense + Math.round(annualTripExpense/10)}`
  travelAgentCutDisplay.innerText = `*Includes $${Math.round(annualTripExpense/10)} paid to your travel agent.`
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

const verifyTripRequestInfo = () => {
  if (!tripStartDate.value || tripStartDate.value < today()) {
    alert('Travel date must be today or in the future. We are not a time-travel agency!')
  } else if (!tripDuration.value) {
    alert('Please enter duration of travel.')
  } else if (!numTravelersSelect.value) {
    alert('Please enter number of travelers.')
  } else if (destinationsSelect.value === "0") {
    alert('Please chose a destination.')
  } else {
    submitTripRequest()
  }
}

const submitTripRequest = () => {
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
  postNewTrip(newTripRequest)
  
  setTimeout(() => {
    alert('Your trip will be sent to one of our agents for approval')
    fetchRemoteData()
  }, 1000);
}
tripRequestSubmitButton.addEventListener('click', verifyTripRequestInfo)

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
    fetchSingleTravelerByID(userLoginID),
    fetchAllTrips(),
    fetchAllDestinations(),
    ])
    .then(data => {
      currentTraveler = new Traveler(data[0])
      allTripsData = data[1].trips
      const tripsByTravelerID = data[1].trips.filter(trip => trip.userID === userLoginID)
      currentUsersTrips = tripsByTravelerID.map(trip => new Trip(trip))
      destinationsData = data[2].destinations
    })
    .then(() => {
      populateTravelerDashboard()
    })
}
window.addEventListener('load', fetchRemoteData)
export default today