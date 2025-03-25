const Plato = require('../models/platos');

const PlatosController = {
  async obtenerPlatos(req, res) {

    try {
      const platos = await Plato.find();

      res.status(200).json(platos); // Devuelve una lista de platos encontrados

    } catch (error) {
      console.error("Error al obtener los platos:", error); // - Debugging -
      res.status(500).json({ error: "Error al obtener los platos." });
    }
  },

  async crearPlato(req, res) {
    const { nombre, descripcion, precio, categoria, imagen } = req.body;

    try {
      // Validaciones
      const errores = [];

      if (await Plato.exists({ nombre })) {
        errores.push("El plato ya existe.");
      }
      
      if (!nombre || nombre.length > 20) {
        errores.push("El nombre es necesario y debe ser menor a 20 caracteres.");
      }

      if (!descripcion || descripcion.length > 200) {
        errores.push("La descripción es necesaria y debe ser menor a 200 caracteres.");
      }

      if (!precio || isNaN(precio) || precio <= 0){
        errores.push("El precio debe ser un número válido y mayor a 0.");
      }

      if (!categoria || categoria.length > 20) {
        errores.push("La categoría es necesaria y debe ser menor a 20 caracteres.");
      }

      if (errores.length > 0) {
        return res.status(400).json({ errores });
      }
      // Fin Validaciones

      const nuevoPlato = new Plato({ nombre, descripcion, precio, categoria, imagen });

      await nuevoPlato.save(); // Guardando plato en la base de datos

      res.status(201).json(nuevoPlato); // Devuelve una respuesta y el plato creado

    } catch (error) {
      console.error("Error al crear el platos:", error); // - Debugging -
      res.status(500).json({ error: "Error al crear el plato." });
    }
  },

  async obtenerPlato(req, res) {
    const { id } = req.params;

    try {

      const plato = await Plato.findOne(id);

      if (!plato) {
        return res.status(404).json({error: "Plato no encontrado."});
      }

      res.status(200).json(plato);

    } catch (error) {
      console.error("Error al obtener el plato:", error);
      res.status(500).json({ error: "Error al obtener el plato." });
    }
  },

  async editarPlato(req, res) {
    const { id } = req.params;
    const { nombre, descripcion, precio, categoria, imagen } = req.body;

    try {
      
      const plato = await Plato.findById(id);
      
      if (!plato){
        return res.status(404).json({error: "Plato no encontrado."});
      }

      const errores = [];

      if (nombre && nombre.length > 20) {
        errores.push("El nombre debe ser menor a 20 caracteres.");
      }

      if (descripcion && descripcion.length > 200) {
        errores.push("La descripción debe ser menor a 200 caracteres.");
      }

      if (precio && (isNaN(precio) || precio <= 0)) {
        errores.push("El precio debe ser un número válido y mayor a 0.");
      }

      if (categoria && categoria.length > 20) {
        errores.push("La categoría debe ser menor a 20 caracteres.");
      }

      if (errores.length > 0) {
        return res.status(400).json({ errores });
      }

      const platoEditado = await Plato.findByIdAndUpdate(id, req.body, { new: true });

      res.status(200).json(platoEditado);

    } catch (error) {
      console.error("Error al editar el plato:", error);
      res.status(500).json({ error: "Error al editar el plato." });
    }
  },

  async eliminarPlato(req, res) {
    const { id } = req.params;

    try {
      const plato = await Plato.findById(id);

      if (!plato) {
        return res.status(404).json({error: "Plato no encontrado."});
      }

      await Plato.findByIdAndDelete(id);

      res.status(200).json({mensaje: "Plato eliminado."});

    } catch (error) {
      console.error("Error al eliminar el plato:", error);
      res.status(500).json({ error: "Error al eliminar el plato." });
    }
  }
};

module.exports = PlatosController;