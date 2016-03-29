/*
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Add a new book", function () {

    describe("PUT /api/books", function () {

        it("respond with 200", function (done) {

            request(app)
                .put('/api/books')
                .set('Content-Type', 'application/json')
                .set({
                "id": "0596517742",
                "title": "JavaScript: The Good Parts",
                "author": "Douglas Crockford",
                "genre": "Programming",
                "price": "17,69",
                "publishDate": "2008-05-01",
                "description": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code."
                })
                .expect(200, done());

        });
    });
});
*/