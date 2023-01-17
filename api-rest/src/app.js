// Importando Módulos (Dependências)
const { PORT } = require("dotenv").config().parsed;
const app = require("express")();

// Mapeando as Rotas
const customers = require("../routes/customers");
app.use("/customers", customers);

// require("../routes/users")(app);

// Iniciando a Aplicação
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));
