const Customer = require("../dao/customer");

exports.createOne = (req, res) => {
  Customer.create(req.body, (err) => {
    if (!err) {
      res.status(201).send({});
    } else {
      res.status(400).send({ err });
    }
  });
};

exports.getAll = (req, res) => {
  Customer.findAll((err, data) => res.send(data));
};

exports.getOne = (req, res) => {
  Customer.findOne(req.params.id, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ errMsg: "customer not found" });
    }
  });
};

exports.changeOne = (req, res) => {
  Customer.updatePartial(req.params.id, req.body, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};

exports.removeOne = (req, res) => {
  Customer.deleteOne(req.params.id, (err) => {
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
