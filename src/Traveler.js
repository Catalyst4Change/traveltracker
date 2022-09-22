class Traveler {
  constructor(id, name, travelerType) {
    this.id = id,
    this,name = name,
    this.travelerType = travelerType
  }
  travelerTrips(travelerID) {

  }
  travelerTotalTripExpenses(travelerID) {

  }
  travelerTripRequest(reqID, reqUserID, reqDestinationID, reqTravelers, reqDate, reqDuration, reqStatus, reqSuggestedActivities) {
    let requestedTrip = {
      id: reqID,
      userID: reqUserID,
      destinationID: reqDestinationID,
      travelers: reqTravelers,
      date: reqDate,
      duration: reqDuration,
      status: reqStatus,
      suggestedActivities: reqSuggestedActivities
    }
    new Trip(requestedTrip)
    /* should be able to make a trip request:
  I will select a date, duration, number of travelers and choose from a list of destinations
  After making these selections, I should see an estimated cost (with a 10% travel agent fee) for the trip.
  Once I submit the trip request, it will show on my dashboard as “pending” so that the travel agency can approve or deny it.
  */
  }

}

