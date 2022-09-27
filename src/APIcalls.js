// GETS //
const fetchAllTravelers = () => {
  return fetch('http://localhost:3001/api/v1/travelers')
  .then(response => response.json())
  .catch(err => console.log('fetchAllTravelers.err:', err))
}

const fetchSingleTravelerByID = (id) => {
  const urlPlusID = 'http://localhost:3001/api/v1/travelers/' + id
  return fetch(urlPlusID)
  .then(response => response.json())
  .catch(err => console.log('fetchSingleTravelerByID.err:', err))
}

const fetchAllTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
  .then(response => response.json())
  .catch(err => console.log('fetchAllTrips.err:', err)) 
}

const fetchAllDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
  .catch(err => console.log('fetchAllDestinations.err:', err))
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

export {
  fetchAllTravelers,
  fetchSingleTravelerByID,
  fetchAllTrips,
  fetchAllDestinations,
  postNewTrip,
  postNewDestination,
  postModifyTrip,
  postDeleteTrip
}