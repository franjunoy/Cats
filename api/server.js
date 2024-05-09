const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://http.cat/');
    res.json(data);
  } catch (error) {
    console.error('Error al cargar gatos:', error);
    res.status(500).json({ error: 'Error al cargar gatos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
