// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({origin: 'http://127.0.0.1:3000'}));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.use('/api', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

