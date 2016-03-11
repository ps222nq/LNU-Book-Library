
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Get Book", function () {

    describe("GET /api/books/book_id", function () {

        it("respond with book 1 as JSON", function (done) {

            request(app)
                .get('/api/books/1')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 2 as JSON", function (done) {

            request(app)
                .get('/api/books/2')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 3 as JSON", function (done) {

            request(app)
                .get('/api/books/3')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 4 as JSON", function (done) {

            request(app)
                .get('/api/books/4')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 5 as JSON", function (done) {

            request(app)
                .get('/api/books/5')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 6 as JSON", function (done) {

            request(app)
                .get('/api/books/6')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 7 as JSON", function (done) {

            request(app)
                .get('/api/books/7')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });

        it("respond with book 8 as JSON", function (done) {

            request(app)
                .get('/api/books/8')
                .set('Accept', 'application/json')
                .expect("Content-Type", "/JSON/")
                .expect(200, done());

        });
    });
});
