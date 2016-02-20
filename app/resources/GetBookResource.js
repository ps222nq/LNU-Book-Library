(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    //
    var Books = require("./models/Books");

    module.exports = function (id, callback) {
        var harryPotter = new Books("1", "Harry P", "JKR");
        var b = [harryPotter];
        callback(b);
        console.log(harryPotter);
    };

}());
