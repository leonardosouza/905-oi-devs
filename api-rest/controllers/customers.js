const db = require("../infra/connection");

exports.createOne = (req, res) => {
  const { id, name, email, birthday, cpf, typeAccount } = req.body;

  const sql = `INSERT INTO customers
                  (id, name, email, birthday, cpf, typeAccount) 
                  VALUES 
                  ('${id}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}')`;

  db.run(sql, (err) => {
    if (!err) {
      res.status(201).send({ id, name, email, birthday, cpf, typeAccount });
    } else {
      res.status(400).send({ err });
    }
  });
};

exports.getAll = (req, res) => {
  const sql = `SELECT * FROM customers`;
  db.all(sql, (err, data) => res.send(data));
};

exports.getOne = (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM customers WHERE id = '${id}'`;
  db.get(sql, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ errMsg: "customer not found" });
    }
  });
};

exports.changeOne = (req, res) => res.send("CHANGE ONE");

exports.removeOne = (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM customers WHERE id = '${id}'`;

  db.run(sql, function (err) {
    if (!err) res.status(204).end();
  });
};

/*
// ALTERNATIVA DE IMPLEMENTACAO

module.exports = {
  createOne: (req, res) => res.send("CREATE ONE"),

  getAll: (req, res) => res.send("GET ALL"),

  getOne: (req, res) => res.send("GET ONE"),

  changeOne: (req, res) => res.send("CHANGE ONE"),

  removeOne: (req, res) => res.send("REMOVE ONE"),
};
*/
