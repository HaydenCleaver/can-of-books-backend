const Book = require('../models/Book.js');

const deleteBooks = async (request, response, next) => {
  let bookID = request.params.id;
  try{
    await Book.deleteOne({_id: bookID});
    response.status(204).send('Successfully Deleted');
  } catch (e){
    response.status(404).send('Deletion Failed');
  }
};

module.exports = deleteBooks;
