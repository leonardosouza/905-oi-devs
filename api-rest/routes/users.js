module.exports = function (ctx) {
  // Criar um Usuário - HTTP POST (Create)
  ctx.post("/users/", (req, res) => res.send("HTTP POST - Usuário"));

  // Recuperar um Usuário - HTTP GET (Retrieve)
  ctx.get("/users/", (req, res) => res.send("HTTP GET - Usuário"));

  // Atualizar um Usuário - HTTP PUT (Update)
  ctx.put("/users/", (req, res) => res.send("HTTP PUT - Usuário"));

  // Excluir um Usuário - HTTP DELETE (Delete)
  ctx.delete("/users/", (req, res) => res.send("HTTP DELETE - Usuário"));
};
