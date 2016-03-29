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

 describe("EditBookResource", function() {

 describe("test the editing of books", function() {

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

 //it("tests if book has been edited", function() {
 // This should work by getting the array that is processed in EditBookResource
 // And comparing the edited item to a mockup edited item at the index provided
 // But testing knowledge  and time allotted is insufficient at this time

 // });


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