'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./Book.js');

const app = express();
app.use(cors());

//URI to running mongo db
mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;

// const title = process.argv[2];
// const description = process.argv[3];
// const status = process.argv[4];

// let book = new Book ({
//   title,
//   description,
//   status,
// });

// book.save().then(data => {
//   console.log(data);
// });

let bookOne = new Book ({
  title: 'Watership Down',
  description: 'An adventure novel about a group of rabbits seeking a new home.',
  status: 'Finished'
});

bookOne.save()
  .then(() => {
    Book.find().then(data => {
      console.log(data);
    });
  });

app.get('/books', (request, response) => {
  let {title, description, status} = request.query;
  let queryObject = {};

  if (title){
    queryObject.title = title;
  }
  if (description){
    queryObject.description = description;
  }
  if (status){
    queryObject.status = status;
  }

  Book.find(queryObject)
    .then(bookData => {
      response.send(bookData);
    });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
