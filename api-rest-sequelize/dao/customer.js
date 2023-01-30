const db = require("../infra/connection");
const { ulid } = require("ulid");

class Customer {
  create(data, callback) {
    const { name, email, birthday, cpf, typeAccount } = data;

    const sql = `INSERT INTO customers
                  (id, name, email, birthday, cpf, typeAccount) 
                  VALUES 
                  ('${ulid()}', '${name}', '${email}', '${birthday}', '${cpf}', '${typeAccount}')`;

    db.run(sql, callback);
  }

  findAll(callback) {
    const sql = `SELECT * FROM customers`;
    db.all(sql, callback);
  }

  findOne(id, callback) {
    const sql = `SELECT * FROM customers WHERE id = '${id}'`;
    db.get(sql, callback);
  }

  deleteOne(id, callback) {
    const sql = `DELETE FROM customers WHERE id = '${id}'`;
    db.run(sql, callback);
  }

  updatePartial(id, data, callback) {
    let customerData = Object.entries(data);
    let fields = [];
    for (let i = 0; i < customerData.length; i++) {
      fields.push(`${customerData[i][0]} = '${customerData[i][1]}'`);
    }

    const sql = `UPDATE customers SET 
                    ${fields.join(",")}
                WHERE
                    id = '${id}'`;

    db.run(sql, callback);
  }
}

module.exports = new Customer();
