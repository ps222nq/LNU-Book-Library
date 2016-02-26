(function () {
    "use strict";

    var fs = require("fs");

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
            fs.readFile("./books.xml", function(error, data){
                if(error){
                    return console.log(error);
                }
                var parser = new xml2js.Parser();
                parser.parseString(data, function(err, res){
                    callback(err, res);
                });

            });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        },

        //convert the XML file to a JSON object
        convertToJSON: function(data){
            return JSON.stringify(data);
        }
    };

    module.exports = LibraryDAO;
}());
