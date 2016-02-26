/**
 * Created by pepynswagemakers on 07/02/16.
 */
    "use strict";
/*
* Represents a book
* @constructor
* @param {string} id - Unique ID to identify the book
* @param {string} title - The title of the book
* @param {string} author - The author of the book
* @param {string} genre - The genre of the book
* @param {string} publishDate - The year the book was published
* @param {string} description - A short description of the book's contents
* */
var Books = function(id, title, author, genre, price, publishDate, description) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.publishDate = publishDate;
    this.description = description;
};

module.exports = Books;
