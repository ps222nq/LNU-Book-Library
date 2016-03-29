/*
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Delete a  book", function () {

    describe("DELETE /api/books/3", function () {

        it("respond with 200", function (done) {

            request(app)
                .del('/api/books/3')
                .expect(200, done());

        });

        it("respond with 404", function (done) {

            request(app)
                .del('/api/books/glenn')
                .expect(404, done());

        });
    });
});
*/