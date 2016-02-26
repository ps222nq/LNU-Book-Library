(function() {
    "use strict";

    var fs = require("fs");

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require("xml2js");

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            fs.readFile("./app/resources/books.xml", function(error, data) {
                if (error) {
                    return console.log(error);
                }
                
                var parser = new xml2js.Parser();
                parser.parseString(data, function(err, res) {
                    callback(err, res);
                });

            });
        },

        // Write the entire file to the file system.
        writeXMLFile: function(data) {
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(data);

            fs.writeFile("./app/resources/books.xml", xml, function(error) {
                if (error) {
                    return console.log(error);
                }
            });
        }
    };

    module.exports = LibraryDAO;
}());
