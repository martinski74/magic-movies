const { Schema, SchemaTypes: Types, model } = require('mongoose');

const castSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: [5, 'Name should be at least 5 characters long'],
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 120,
  },
  born: {
    type: String,
    required: true,
    minLength: 10,
  },
  nameInMovie: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/,
  },
  movie: {
    type: Types.ObjectId,
    ref: 'Movie',
  },
});

const Cast = model('Cast', castSchema);

module.exports = { Cast };
