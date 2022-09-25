class Trip {
  constructor(tripRequest) {
    this.id = tripRequest.id,
    this.userID = tripRequest.userID,
    this.destinationID = tripRequest.destinationID,
    this.travelers = tripRequest.travelers,
    this.date = tripRequest.date // format: 2022/05/22
    this.numericDate = new Date(tripRequest.date.replaceAll('/', '-')),
    this.duration = tripRequest.duration,
    this.status = this.capitalize(tripRequest.status), 
    this.suggestedActivities = tripRequest.suggestedActivities
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}

export default Trip