class Traveler {
  constructor({id, name, travelerType}) {
    this.id = id
    this.name = name
    this.travelerType = travelerType
  }
  calculateAnnualTripExpenses(trips, destinations) {
    return trips.reduce((acc,trip) => {
      const dest = destinations.find(destination => destination.id === trip.destinationID)
      acc += (dest.estimatedLodgingCostPerDay * trip.duration) 
      + (dest.estimatedFlightCostPerPerson * trip.travelers)
      return acc
    },0)
  }

  submitTripRequest() {

  }


  /*
  I should be able to make a trip request:
  I will select a date, duration, number of travelers and choose from a list of destinations
  iterate thru destinations
  += dest.name to destinations selector tag
  * rcv input from html 


  After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
  * return cost calculateTripExpenses
    
  Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
  * create new trip instance w data
    assign status:pending


  */





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