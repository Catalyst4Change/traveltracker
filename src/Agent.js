class Agent {
  constructor(id) {
    this.id = id
    this.income = 0
  }
  agentCurrentTravelers() {
    // Travelers on trips for today’s date (number, names, however you want to display this!)
  }
  agentPendingTripRequests() {
    // should be able to see and approve / deny trip requests
  }
  agentSearchUserByID(id) {
    /* 
    http://localhost:3001/api/v1/travelers/<id> where<id> will be a number of a traveler’s id	
    
    should be able to search for any user by name and:
    View their name, a list of all of their trips, and the total amount they’ve spent (including 10% agent cut)
    Approve a trip request for that user
    Delete an upcoming trip for that user
    */
  }
}