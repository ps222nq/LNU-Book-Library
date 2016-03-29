/*
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Update a Book", function () {

    describe("POST /api/books/{book_id}", function () {

        it("responds with 200", function (done) {

            request(app)
                .post('/api/books/2')
                .set('Accept', 'application/json')
                .expect(200, done());

        });

        it("responds with 404", function (done) {

            request(app)
                .post('/api/books/23423451')
                .set('Accept', 'application/json')
                .expect(404, done());

        });
    });
});
*/