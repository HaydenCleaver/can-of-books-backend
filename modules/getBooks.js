const Book = require('../models/Book.js');

const getBooks = async (request, response, next) => {
  try {
    let searchResult = await Book.find();
    response.send(searchResult);
  } catch (e) {
    next(e);
  }
};

module.exports = getBooks;
