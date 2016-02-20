(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    //loads the type representing a book
    var Book = require("./models/Books");

    module.exports = function (callback, title) { // The title is optional and is only present when searching. (You need to modify the books.js file first)
        
        // A list of books to be represented on the Web page
        var sommerville = new Book("1", "Software Engineering", "Ian Sommerville", "Computer Science", "2016", "Tenth edition of the software engineering textbook");
        var crockford = new Book ("2", "Javascript - The Good Parts", "Douglas Crockford", "Computer Science", "2010", "Book about javascript");
        var pelle = new Book("3", "Pelle - my story", "Pelle", "Biography", "2000", "Pelles autobiography");
        var machiavelli = new Book("4", "The Prince", "Machiavelli", "Strategy", "1532", "A book about strategy for princes and rulers");

        //Push books into array and convert it to JSON format
        var b = [sommerville, crockford, pelle, machiavelli];

        var c = JSON.stringify(b);

        //callback function calls API and sends the JSON object with the array as parameter
        callback(c);

        //console.log for debugging purposes
        console.log(c);
    };

}());
