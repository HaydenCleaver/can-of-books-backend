const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book.js');

mongoose.connect(process.env.DATABASE_URL);

const seed = () => {
  if (Book.find()){
    console.log('Data found');
  } else {
    let bookOne = new Book ({
      title: 'Watership Down',
      description: 'An adventure novel about a group of rabbits seeking a new home.',
      status: 'Finished'
    });

    let bookTwo = new Book ({
      title: 'Ender\'s Game',
      description: 'In a desperate bid to train military commanders for a war against the threat of aliens; young children are pitted against each other in war-games to hone their skills.',
      status: 'Finished'
    });

    let bookThree = new Book ({
      title: 'Lord of the Flies',
      description: 'A group of boys from the U.K. are stranded on an island and their social order begins to fall into chaos.',
      status: 'Finished'
    });
    bookOne.save();
    bookTwo.save();
    bookThree.save();
    mongoose.disconnect();
  }
};

seed();
