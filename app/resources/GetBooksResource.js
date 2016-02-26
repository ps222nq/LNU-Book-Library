(function() {
    "use strict";

    var LibraryDAO = require("../dao/LibraryDAO");

    //loads the type representing a book
    var Book = require("./models/Books");

    module.exports = function(callback, title) { // The title is optional and is only present when searching. (You need to modify the books.js file first)

        var c = [];

        //retrieve xml2js-converted object with books
        LibraryDAO.readXMLFile(function(error, data){
            if (error) {
                console.log(error);
            }

            //loop through array with books and instantiate new objects of type Book
            var bookArray = data.catalog.book;
            bookArray.forEach(function(bk){
                var id = bk.$.id;
                var author = bk.author[0];
                var title = bk.title[0];
                var genre = bk.genre[0];
                var price = bk.price[0];
                var publishDate = bk.publish_date[0];
                var description = bk.description[0];

                //push to array for callback
                c.push(new Book(id, title, author, genre, price, publishDate, description));
            });

            //callback sends books to client
            callback(c);
        });

    };

}());
