class Traveler {
  constructor({id, name, travelerType}) {
    this.id = id
    this.name = name
    this.travelerType = travelerType
  }




/*
find trips taken in the last year
split trips.date  
sort by year [0]
*/
calculateAnnualTripExpenses(trips, destinations) {
  return trips.reduce((acc,trip) => {
    const dest = destinations.find(destination => destination.id === trip.destinationID)
    acc += (dest.estimatedLodgingCostPerDay * trip.duration) 
    + (dest.estimatedFlightCostPerPerson * trip.travelers)
    return acc
  },0)
}







matchTripToDestination(trips, destinations) {
  trips.forEach(trip => {
  return destinations.find(dest => dest.id === trip.destinationID)
  })
}


  



    // destinations.reduce((acc,dest) => {
    //   trips.forEach(trip => {

    //   })
    //   const costPerDay = dest.estimatedLodgingCostPerDay * trips
    //   return acc
    // },0)
    // total expeses for a given year
  
}

export default Traveler