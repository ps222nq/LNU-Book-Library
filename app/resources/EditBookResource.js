(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function(id, data, callback) {
        console.log("id from edit: " + id);
        console.log("data from edit: " + data);
        console.log("description: " + data.description);

        LibraryDAO.readXMLFile(function(error, obj){
            if(error){
                return console.log(error);
            }

            var bookArray = obj.catalog.book;

            bookArray.forEach(function(bk){
                if(bk.$.id === id){
                    bk.author = data.author;
                    bk.title = data.title;
                    bk.genre = data.genre;
                    bk.price = data.price;
                    bk.description = data.description;
                    bk.publish_date = data.publish_date;
                }
            });

            LibraryDAO.writeXMLFile(obj);

            callback(obj);

        });
    };

}());
