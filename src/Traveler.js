import Trip from "./Trip"

class Traveler {
  constructor({id, name, travelerType}) {
    this.id = id
    this.name = name
    this.travelerType = travelerType
  }

  

  calculateAnnualTripExpenses(trips, destinations) {
    const today = new Date(Date.now())
    const oneYearAgo = new Date(new Date(new Date().setFullYear(new Date().getFullYear() - 1)))
    const oneYearOld = (today.valueOf() - oneYearAgo.valueOf());

    const thisYearsTrips = () => {
      return trips.filter(trip => {
      if (today.valueOf() - trip.numericDate.valueOf() < oneYearOld) {
        return trip
      }
    })}

    return thisYearsTrips().reduce((acc,trip) => {
      const dest = destinations.find(destination => destination.id === trip.destinationID)
      acc += (dest.estimatedLodgingCostPerDay * trip.duration) 
      + (dest.estimatedFlightCostPerPerson * trip.travelers)
      return acc
    },0)
  }
}

export default Traveler