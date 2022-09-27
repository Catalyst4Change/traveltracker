import chai from 'chai';
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
const expect = chai.expect;


describe('Traveler Class', function() {
  let newTraveler
  let trips
  let destinations
  beforeEach(function() {
    newTraveler = new Traveler({
      "id": 1,
      "name": "Sparky McHoulihan",
      "travelerType": "intrepid-loser"
    })
    trips = [{
      "id": 1,
      "userID": 1,
      "destinationID": 1,
      "travelers": 1,
      "date": "2021/11/01",
      "numericDate": new Date("2021-11-01"),

      "duration": 17,
      "status": "approved",
      "suggestedActivities": []
    }
    , {
      "id": 2,
      "userID": 1,
      "destinationID": 2,
      "travelers": 1,
      "date": "2022/11/28",
      "numericDate": new Date("2022-11-28"),

      "duration": 4,
      "status": "approved",
      "suggestedActivities": []
    }, {
      "id": 3,
      "userID": 1,
      "destinationID": 3,
      "travelers": 1,
      "date": "2020/08/31",
      "numericDate": new Date("2020-08-31"),

      "duration": 16,
      "status": "approved",
      "suggestedActivities": []
    }]
    destinations = [{
      "id": 1,
      "destination": "Santo Domingo, Dominican Republic",
      "estimatedLodgingCostPerDay": 400,
      "estimatedFlightCostPerPerson": 80,
      "image": "https://images.unsplash.com/photo-1510541383520-4daa77a666cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80",
      "alt": "aerial view of houses and high rise building"
    },
    {
      "id": 2,
      "destination": "Nassau, The Bahamas",
      "estimatedLodgingCostPerDay": 550,
      "estimatedFlightCostPerPerson": 90,
      "image": "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1664&q=80",
      "alt": "aerial photography of white and blue cruise ships during daytime"
    },
    {
      "id": 3,
      "destination": "Caye Caulker, Belize",
      "estimatedLodgingCostPerDay": 450,
      "estimatedFlightCostPerPerson": 80,
      "image": "https://images.unsplash.com/photo-1544525977-0a3bca9e560d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      "alt": "boat on dock during daytime"
    }]
  })

  it('should create an instance of Traveler', () => {
    expect(newTraveler).to.deep.equal({
      "id": 1,
      "name": "Sparky McHoulihan",
      "travelerType": "intrepid-loser"
    });
  });

  it('should calculate todays date', () => {
    expect(newTraveler.today()).to.equal('2022-09-27')
  })
  // refactor to be dynamic

  it('should calculate annual trip expenses', () => {
    expect(newTraveler.calculateAnnualTripExpenses(trips, destinations)).to.equal(9170)
  })
});
