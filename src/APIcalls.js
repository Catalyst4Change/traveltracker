// used by Agent:
const fetchAllTravelers = () => {
  const allTravelersData = fetch("http://localhost:3001/api/v1/travelers")
  .then(response => response.json())
  .then(data => data.travelers)
  .catch(err => console.log("fetchAllTravelers.err:", err))
  return allTravelersData
}

const fetchSingleTravelerByID = (id) => {
  const urlPlusID = "http://localhost:3001/api/v1/travelers/" + id
  console.log("fetch single traveler:", urlPlusID);
  // const singleTravelerData = fetch(urlPlusID)
  // .then(response => response.json())
  // .then(data => data.results)
  // .catch(err => console.log("fetchSingleTravelerByID.err:", err))
  // return singleTravelerData
}

const fetchAllTrips = () => {
  const allTripsData = fetch("http://localhost:3001/api/v1/trips")
  .then(response => response.json())
  .then(data => data.trips)
  .catch(err => console.log("fetchAllTrips.err:", err))
  return allTripsData
}

const fetchAllDestinations = () => {
  const allDestinationsData = fetch("http://localhost:3001/api/v1/destinations")
  .then(response => response.json())
  .then(data => data.destinations)
  .catch(err => console.log("fetchAllDestinations.err:", err))
  return allDestinationsData
}

// temporary //
const data = {
  id: 420, 
  userID: 25, 
  destinationID: 25, 
  travelers: 6, 
  date: 2022/09/22, 
  duration: 10, 
  status: 'approved', 
  suggestedActivities: ["drinkin", "smokin", "layin low"]}

const postNewTrip = (data) => { 
  fetch("http://localhost:3001/api/v1/trips", {
    Method: 'POST',
    Headers: {
      "Content-Type": "application/json"
      },
    Body: JSON.stringify(data),
  })
}
/* 
post data format: {
  id: <number>, 
  userID: <number>, 
  destinationID: <number>, 
  travelers: <number>, 
  date: <string 'YYYY/MM/DD'>, 
  duration: <number>, 
  status: <string 'approved' or 'pending'>, 
  suggestedActivities: <array of strings>}
*/

/* 
Add new trip	
WHAT DOES THIS MEAN
Sample Successful Response"
{message: 'Trip with id <id> successfully posted', 
newTrip: <Object with trip info just posted>}
*/

export {
  fetchAllTravelers,
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
  postNewTrip
}