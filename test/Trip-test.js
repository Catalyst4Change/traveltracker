import chai from 'chai';
import Trip from '../src/Trip';
const expect = chai.expect;

describe('Trip Class', function() {
  let newTrip
  beforeEach(function() {
    newTrip = new Trip({
      "id": 420,
      "userID": 69,
      "destinationID": 35,
      "travelers": 1,
      "date": "2020/11/09",
      "duration": 19,
      "status": "approved",
      "suggestedActivities": []
    });
  });

  it('should create an instance of Trip', () => {
    expect(newTrip.id).to.deep.equal(420)
  })
  it('should create numeric date based on string date', () => {
    expect(String(newTrip.numericDate)).to.deep.equal('Sun Nov 08 2020 17:00:00 GMT-0700 (Mountain Standard Time)')
  })
  it('should capitalize the status, because I think it looks better that way.', () => {
    expect(newTrip.status).to.equal('Approved')
  })
});
