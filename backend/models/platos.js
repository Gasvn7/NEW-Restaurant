const mongoose = require('mongoose');

const PlatoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: false,
  }
},{
  timestamps: true,
})

module.exports = mongoose.model('Plato', PlatoSchema);