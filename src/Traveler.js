import Trip from "./Trip"

class Traveler {
  constructor({id, name, travelerType}) {
    this.id = id
    this.name = name
    this.travelerType = travelerType
  }

  today() {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    
    today = yyyy + '-' + mm + '-' + dd
    return today
  }
  
  calculateAnnualTripExpenses(trips, destinations) {
    const brandNewDay = new Date(this.today())
    const oneYearAgo = new Date(new Date(new Date().setFullYear(new Date().getFullYear() - 1)))
    const oneYearOld = (brandNewDay.valueOf() - oneYearAgo.valueOf());

    const thisYearsTrips = () => {
      return trips.filter(trip => {
      if (brandNewDay.valueOf() - trip.numericDate.valueOf() < oneYearOld) {
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