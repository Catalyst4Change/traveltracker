class Traveler {
  constructor({id, name, travelerType}) {
    this.id = id
    this.name = name
    this.travelerType = travelerType
  }




/*
find total cost of a trip
  (dest.estimatedLodgingCostPerDay * trip.duration) + (estimatedFlightCostPerPerson * trip.travelers)  
*/







  matchTripToDestination(trips, destinations) {
    trips.forEach(trip => {
    return destinations.find(dest => dest.id === trip.destinationID)
    }
  }


  
  calculateAnnualTripExpenses(trips, destinations) {
    this.matchTripToDestination(trips, destinations)




    // destinations.reduce((acc,dest) => {
    //   trips.forEach(trip => {

    //   })
    //   const costPerDay = dest.estimatedLodgingCostPerDay * trips
    //   return acc
    // },0)
    // total expeses for a given year
  }
}

export default Traveler