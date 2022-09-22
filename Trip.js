class Trip {
  constructor(id, userID, destinationID, travelers, date, duration, status, suggestedActivities) {
    this.id = id,
    this.userID = userID,
    this.destinationID = destinationID,
    this.travelers = travelers,
    this.date = date, // format: 2022/05/22
    this.duration = duration,
    this.status = status, 
    this.suggestedActivities = []
  }
}

