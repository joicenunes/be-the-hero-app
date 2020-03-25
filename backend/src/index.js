const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); //converte o corpo dos requests em json
app.use(routes);

/* 
  Tipos de parâmetros

  Query: parâmetros nomeados enviados na rota (para filtrar, paginação)
  Ex: url/users?name=Joice&idade=12
  Acesso no back: req.query
  Route: utilizados para identificar recursos
  Ex: url/users/:id
  Acesso: req.params
  Request body
  Acesso: req.body
*/

app.listen(3333);
