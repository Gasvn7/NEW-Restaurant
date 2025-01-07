const Plato = require('../models/platos');

const PlatosController = {
  async obtenerPlatos(req, res) {
    try {
      const platos = await Plato.find();
      console.log("Platos encontrados:", platos); // Debugging
      res.status(200).json(platos);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los platos." });
    }
  },

  async crearPlato(req, res) {
    const { nombre, descripcion, precio, categoria, imagen } = req.body;
    try {
      const plato = await Plato.find(where = { nombre: nombre });
      if(plato.length > 0) {
        return res.status(400).json({ error: "El plato ya existe." });
      };
      
      const nuevoPlato = new Plato({ nombre, descripcion, precio, categoria, imagen });
      console.log("Nuevo plato creado con exito:", nuevoPlato); // Debugging
      await nuevoPlato.save();
      console.log("Plato guardado en la base de datos."); // Debugging
      res.status(201).json(nuevoPlato);
    } catch (error) {
      res.status(500).json({ error: "Error al crear el plato." });
    }
  },
};

module.exports = PlatosController;