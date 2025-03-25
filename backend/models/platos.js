const mongoose = require('mongoose');

const PlatoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    maxLength: 20
  },
  descripcion: {
    type: String,
    required: true,
    maxLength: 200
  },
  precio: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    required: true,
    maxLength: 20
  },
  imagen: {
    type: String,
    required: false
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Plato', PlatoSchema);