require('dotenv').load(require('path').resolve(__dirname, '../.env'));
var expect = require('chai').expect;
var githubRate = require('../index');
describe('Main github rate function', function () {
  this.timeout(2 * 60 * 1000);
  it('should return all data about user', function (done) {
    githubRate('raabbajam')
      .then(function (result) {
        console.log(result);
        expect(result).to.be.ok;
        done();
      })
      .catch(done);
  });
});
