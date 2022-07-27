const Book = require('../models/Book');

const postBooks = async (request, response, next) => {

  console.log(request.body);

  let {title, description, status} = request.body;
  if (!title || !description || !status){
    next ('Request Failed');
  }

  try {
    let book = new Book ({
      title,
      description,
      status
    });

    book.save()
      .then(results => {
        response.send(results);
      });
  } catch (e) {
    next(e);
  }
};

module.exports = postBooks;
