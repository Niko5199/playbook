// * Usando objeto express
const express = require('express');
// * App de Express
const app = express();
app.use(express.json()); // * Indicamos que usaremos JSON

// * Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// * HTTP METHODS
app.get('/v1/explorers', (req, res) => {
  console.log(`Api Explorers GET ALL request ${new Date()}`);
  const explorer1 = { id: 1, name: 'Josue' };
  const explorer2 = { id: 2, name: 'Carlos' };
  const explorer3 = { id: 3, name: 'Juan' };
  const explorer4 = { id: 4, name: 'Reyes' };

  const explorers = [explorer1, explorer2, explorer3, explorer4];
  res.status(200).json(explorers);
});

//  * Get endpoint return ID
app.get('/v1/explorers/:id', (req, res) => {
  console.log(`Api Explorers GET request ${new Date()}`);
  console.log(`Getting explorer with id ${req.params.id} `);

  const explorer = { id: 1, name: 'Josue' };
  res.status(200).json(explorer);
});

// * Post endpoint create Explorer
app.post('/v1/explorers', (req, res) => {
  console.log(`Api Explorers POST resquest ${new Date()}`);
  const requestBody = req.body;
  res.status(201).json({ message: 'Created' });
});

// * Put endpoint Update
app.put('/v1/explorers/:id', (req, res) => {
  console.log(`Api Explorers PUT request ${new Date()}`);
  console.log(`Update explorer with id ${req.params.id}`);
  const requestBody = req.body;
  res.status(200).json({ message: 'Updated' });
});

// * DELETE endpoint Delete
app.delete('/v1/explorers/:id', (req, res) => {
  console.log(`Api Explorers DELETE request ${new Date()}`);
  console.log(`Delete explorer with id ${req.params.id}`);

  const requestBody = req.body;
  res.status(200).json({ message: 'Delete' });
});

// * Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
