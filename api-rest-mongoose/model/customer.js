const mongoose = require('mongoose');

require("../infra/connection");


const CustomerSchema = new mongoose.Schema({
    typeAccount: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                console.log(value.includes("@"));
                return value.includes("@");
            },
            message: 'Precisa ser um email'
        }
    },
    cpf: {
        type: Number,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }
});


const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;