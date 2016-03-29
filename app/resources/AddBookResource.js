(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require("./models/Books");


    module.exports = function (data, callback) {

        LibraryDAO.readXMLFile(function(error, obj){
            if(error){
                return console.log(error);
            }

            var bookArray = obj.catalog.book;
            var length = obj.catalog.book.length;
            var lastIndex = length - 1;

            // add || 0 in case array is empty and returns undefined
            var lastId = parseInt(obj.catalog.book[lastIndex].$.id) || 0;

            var newBook = new Book(
                lastId + 1,
                data.title,
                data.author,
                data.genre,
                data.price,
                data.publishDate,
                data.description
            );

            bookArray.push(newBook);

            LibraryDAO.writeXMLFile(obj);

            callback(obj);

        });
    };

}());
