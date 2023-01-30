//const Customer = require("../dao/customer");
const Customer = require("../model/customer");

exports.createOne = (req, res) => {
  const customer = new Customer(req.body);
  customer.save((err)=> {
    console.log(err);
    if (err) {
      res.status(400).send({ err });
    } else {
      res.status(201).send({});
    }
  });
};

exports.getAll = (req, res) => {
  
  let params = {};
  if (Object.keys(req.query).length > 0) {
    params = req.query;
  }

  Customer.find(params).exec((err, data) => {
    res.send(data);
  });
};

exports.getOne = (req, res) => {
  const param = {_id: req.params.id};

  Customer.findOne(param, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ errMsg: "customer not found" });
    }
  });
};



exports.changeOne = (req, res) => {

  Customer.findOneAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });

};

exports.removeOne = (req, res) => {

  const param = {_id: req.params.id};
  Customer.remove(param, (err, customer) => {
    console.log(customer.deletedCount);
    if (!err && customer.deletedCount > 0){ 
      res.status(204).end();
    } else {
      res.status(404).end();
    }
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
