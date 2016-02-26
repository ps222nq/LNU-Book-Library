(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {

        //retrieve XML file
        LibraryDAO.readXMLFile(function(error, file){
            if (error) {
                return console.log(error);
            }

            //get array from the xml2js-converted object
            var bookArray = file.catalog.book;
            var i;

            //Loop through the books in the book array and remove the one with specified id
            for (i = 0; i < bookArray.length; i += 1){
                if (bookArray[i].$.id === id) {
                    bookArray.splice(i, 1);
                }
            }

            LibraryDAO.writeXMLFile(file);

            //required so the list automatically updates
            callback(file);
        });

    };

}());
