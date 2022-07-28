'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const postBooks = require('./modules/postBooks.js');
const getBooks = require('./modules/getBooks.js');
const deleteBooks = require('./modules/deleteBooks.js');
const updateBooks = require('./modules/updateBooks.js');
const app = express();
app.use(cors());

//URI to running mongo db
mongoose.connect(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;


app.use(express.json());

app.post('/books', postBooks);

app.get('/books', getBooks);

app.delete('/books/:id', deleteBooks);

app.put('/books/:id', updateBooks);

app.use ((error, request, response, next) =>{
  response.status(500).send(error);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
