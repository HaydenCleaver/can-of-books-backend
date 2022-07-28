const Book = require('../models/Book');

const updateBooks = async (request, response, next) => {

  try {
    let id = request.params.id;
    let newBook = await Book.findOneAndReplace({_id: id}, request.body);
    response.send(newBook);
  } catch (e) {
    next (e);
  }

};

module.exports = updateBooks;
