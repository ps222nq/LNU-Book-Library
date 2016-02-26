(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');


    module.exports = function (id, callback) {
        console.log("deletar " + id);

        //hämta XML filen, göra om till JS object
        LibraryDAO.readXMLFile(function(error, file){
            if (error) {
                return console.log(error);
            }

            var list = file.catalog.book;
            var i;
            for(i = 0; i < list.length; i += 1){
                if(list[i].$.id === id){
                    list.splice(i, 1);
                }
            }

            LibraryDAO.writeXMLFile(file);

            callback(file);
        });

    };

}());
