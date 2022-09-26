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
}

export default Traveler