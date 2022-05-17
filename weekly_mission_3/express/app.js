// * Usando objeto express
const express = require('express');

// * App de Express
const app = express();

// * Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

// * path(ruta) inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('/launchx', (req, res) => {
//   res.send('Bienvenidos a Launch X');
// });

// * Agregamos una nueva ruta para regresar un objeto
app.get('/explorersInNode', (req, res) => {
  const explorer = { name: 'Explorer', msg: 'Hello' };
  res.send(explorer);
});

// * Agregar una nueva ruta que reciba Query Params
// * El obj req contiene una propiedad llamada params
// * Los query params son los parametros enviados por
// * la url

app.get('/explorer/:explorerName', (req, res) => {
  res.send(req.params);
  console.dir(req.path);
});

// * Con esto inicializamos esta app
app.listen(port, () => {
  console.log('Ejemplo de app escuchando en el puerto', port);
});
