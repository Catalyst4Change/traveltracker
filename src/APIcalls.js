// GETS //
const fetchAllTravelers = () => {
  const allTravelersData = fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .then(data => data.travelers)
  .catch(err => console.log('fetchAllTravelers.err:', err))
  return allTravelersData
}

const fetchSingleTravelerByID = (id) => {
  const urlPlusID = 'http://localhost:3001/api/v1/travelers/' + id
  const singleTravelerData = fetch(urlPlusID)
  .then(response => response.json())
  .then(data => data.results)
  .catch(err => console.log('fetchSingleTravelerByID.err:', err))
  return singleTravelerData
}

const fetchAllTrips = () => {
  const allTripsData = fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  .then(data => data.trips)
  .catch(err => console.log('fetchAllTrips.err:', err))
  return allTripsData
}

const fetchAllDestinations = () => {
  const allDestinationsData = fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .then(data => data.destinations)
  .catch(err => console.log('fetchAllDestinations.err:', err))
  return allDestinationsData
}

// POSTS //

const postNewTrip = (tripData) => { 
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(tripData),
  })
  .then(response => response.json())
  .then(data => console.log('postNewTrip.data:', data))
  .catch(err => console.log('postNewTrip.err:', err))
}
/* 
Add new trip	
WHAT DOES THIS MEAN
Sample Successful Response'
{message: 'Trip with id <id> successfully posted', 
newTrip: <Object with trip info just posted>}
*/

const postNewDestination = (destinationData) => {
  fetch('http://localhost:3001/api/v1/destinations', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(destinationData)
  })
  .then(response => response.json())
  .then(data => console.log('postNewDestination.data:', data))
  .catch(err => console.log('postNewDestination.err:', err))
}

/* Add new destination	
{message: 'Destination with id <id> successfully posted', newDestination: <Object with destination info just posted>}
*/

const postModifyTrip = (modifiedTripData) => {
  fetch('http://localhost:3001/api/v1/updateTrip', {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(modifiedTripData)
  })
  .then(response => response.json())
  .then(data => console.log('postModifyTrip.data:', data))
  .catch(err => console.log('postModifyTrip.err:', err))
}
/* 
Only a status or a suggestedActivities property is required for a successful request
{message: 'Trip #<id> has been modified', updatedTrip: <Object with newly updated data>}
*/

const postDeleteTrip = (triptoDelete) => {
  const urlPlusID = 'http://localhost:3001/api/v1/trips/' + triptoDelete
  fetch(urlPlusID, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => response.json())
  .then(data => console.log('postDeleteTrip.data:', data))
  .catch(err => console.log('postDeleteTrip.err:', err))
}

// message: Trip # has been deleted

export {
  fetchAllTravelers,
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
  postNewTrip,
  postNewDestination,
  postDeleteTrip
}