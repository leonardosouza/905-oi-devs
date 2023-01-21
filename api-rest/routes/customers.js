const express = require("express");
const router = express.Router();
const customersCtrl = require("../controllers/customers");

// Criar um Cliente
router.post("/", customersCtrl.createOne);

// Recuperar Todos os Clientes
router.get("/", customersCtrl.getAll);

// Recuperar um Cliente Específico
router.get("/:id", customersCtrl.getOne);

// Atualizar um Cliente (Parcial)
router.patch("/:id", customersCtrl.changeOne);

// Remover um Cliente
router.delete("/:id", customersCtrl.removeOne);

module.exports = router;
