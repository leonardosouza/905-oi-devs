const { DataTypes } = require("sequelize");
const sequelize = require("../infra/connection");

const CustomerModel = 
    sequelize.define(
        "CustomerModel", 
        {
            id: {
                type: DataTypes.TEXT,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            email: {
                type: DataTypes.TEXT,
                allowNull: false,
                primaryKey: true,
                unique: true
            },
            birthday: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            cpf: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            typeaccount: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        },
        {
            createdAt: false,
            updatedAt: false,
            tableName: "customers"
        }
    );

module.exports = CustomerModel;