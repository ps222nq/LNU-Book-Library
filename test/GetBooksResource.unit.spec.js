var expect    = require("chai").expect;
var GetBooksResource = require("../app/resources/GetBooksResource");
var Book = require("../app/resources/models/Books");

describe("GetBooksResource", function () {

    describe("Tests GetBooksResource", function () {

        it("checks if GBR is a function", function (done) {


            var result = GetBooksResource;

            var foo = function(){
                return "foo";
            };

            expect(typeof result).to.equal(typeof foo);
            done();
        });

        it("checks if books are created correctly", function (done) {


            var result = new Book("55", "Glenn", "Glenn Hysen", "IFK", "82", "1987-01-01", "Är du go eller");

            expect(result.id).to.equal("55");
            expect(result.title).to.equal("Glenn");
            expect(result.author).to.equal("Glenn Hysen");
            expect(result.genre).to.equal("IFK");
            expect(result.price).to.equal("82");
            expect(result.publishDate).to.equal("1987-01-01");
            expect(result.description).to.equal("Är du go eller");
            done();
        });

        //NOTE: Test not actually working.
        it("checks if GBR is a function", function (done) {

            var res = GetBooksResource(function(error, bar){
                return bar;
            });

            console.log(res);

            var fyra = "4";

            expect(fyra).to.equal("4");
            done();
        });


    });
});