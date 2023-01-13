// Importando Módulos (Dependências)
const app = require("express")();

// Mapeando as Rotas
require("../routes/users")(app);

// Iniciando a Aplicação
app.listen(8080, () => console.log("Servidor rodando na porta 8080..."));
