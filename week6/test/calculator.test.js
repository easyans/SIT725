const expect = require("chai").expect;
const request = require("supertest");
const app = require("../server");

describe("Sum Calculator API", function () {
  it("returns status 200 to check if api works", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("should return correct sum for valid numbers", function (done) {
    request(app)
      .get("/add?a=10&b=5")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).to.include("15");
        done();
      });
  });

  it("should handle missing parameters", function (done) {
    request(app)
      .get("/add?a=10")
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).to.include("Invalid input please try again!");
        done();
      });
  });

  it("should return an error for the non-numeric input", function (done) {
    request(app)
      .get("/add?a=hello&b=world")
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).to.include("Opp's, Invalid input please try again!");
        done();
      });
  });
});
