(function() {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    //loads the type representing a book
    var Book = require("./models/Books");

    module.exports = function(callback, title) { // The title is optional and is only present when searching. (You need to modify the books.js file first)

        var c = [];

        LibraryDAO.readXMLFile(function(error, data){
            if(error){
                console.log(error);
            }

            var list = data.catalog.book;
            list.forEach(function(bk){
                var id = bk.$.id;
                var author = bk.author[0];
                var title = bk.title[0];
                var genre = bk.genre[0];
                var price = bk.price[0];
                var publishDate = bk.publish_date[0];
                var description = bk.description[0];
                c.push(new Book(id, title, author, genre, price, publishDate, description));
            });


            //console.log(" c är: \n" + c);

            callback(c);
        });

    };

}());
