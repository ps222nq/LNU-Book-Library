/*var expect    = require("chai").expect;
var fs = require("fs");
var xml2js = require("xml2js");
var LibraryDao = require("../app/dao/libraryDAO");
var testXML = fs.readFile("./testbooks.xml", function(error, data) {
    if (error) {
        return error;
    }

    return data;
});

describe("RemoveBookResource", function() {

    describe("test the deletion of books", function() {

        it("reads the XML file from file storage", function() {

            var result = LibraryDao.readXMLFile(function(error, data) {
                if (error) {
                    return console.log(error);
                }

                var parser  = new xml2js.Parser();
                parser.parseString(data, function(err, res) {
                    if (err) {
                        console.log(err);
                    }

                    return res;
                });
                
            });

            expect(result).to.equal(testXML);

        });

        //it("tests if book has been deleted", function() {
        // This should work by getting the array that is processed in RemoveBookResource
        // And comparing its length to a mockup array where a book has been deleted
        // But testing knowledge  and time allotted is insufficient at this time

        // });

        it("does not crash if list contains no books", function() {
            // This should work by exercising RemoveBookResource and pulling out the array called bookArray
            // And comparing it to an empty mockup array

        });

        it("writes back to the filesystem", function() {

            var working = true;
            var foo = {
                country: "Sweden",
                capital: "Stockholm",
                flagColors: ["blue", "yellow"],
                weather: "cold"
            };

            var builder = new xml2js.Builder();
            builder.buildObject(foo);

            fs.writeFile("./dummyXMLFile.xml", xml, function(error) {
                if (error) {
                    working = false;
                    return console.log(error)
                }
            });

            expect(working).to.equal(true);

        });
    });

});
*/