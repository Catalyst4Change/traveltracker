import Trip from "./Trip"

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

  /*
  Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
  * create new trip instance w data
    assign status:pending

    push to trips API


  */

  // matchTripToDestination(trips, destinations) {
  //   trips.forEach(trip => {
  //   return destinations.find(dest => dest.id === trip.destinationID)
  //   })
  // }

}

export default Traveler