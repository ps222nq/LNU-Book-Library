
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Get List of Books", function () {

    describe("GET /api/books", function () {

        it("responds with 200 status", function (done) {

            request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect(200, done());

        });

        it("responds with 404 status", function (done) {

            request(app)
                .get('/api/boosdfasdks')
                .set('Accept', 'application/json')
                .expect(404, done());

        });

        it("responds with JSON", function (done) {

            request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/", done());

        });
    });
});
