const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config({ path: './backend/.env' });

const platosRouter = require('./routes/platos');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API en funcionamiento.');
});

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(()=> {
  console.log('Conectado a Menu en MongoDB.');
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}).catch((error) => {
  console.log('Error al intentar conectar con MongoDB: ', error);
});

app.use('/platos', platosRouter);