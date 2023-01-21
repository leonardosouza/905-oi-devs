// Importando Módulos (Dependências)
const { PORT } = require("dotenv").config().parsed;
const express = require("express");
const app = express();

// Habilitando CORS
const cors = require("cors");
app.use(cors());

// Habilitando JSON Parser
app.use(express.json());

// IMPLEMENTACAO ALTERNATIVA
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// Mapeando as Rotas
const customers = require("../routes/customers");
app.use("/customers", customers);

// require("../routes/users")(app);

// Iniciando a Aplicação
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));
