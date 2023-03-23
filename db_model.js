const mongoose = require("mongoose");

// Employee model schema
const employeeSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        contact: {
            type: String,
            required: true,
            unique: true,
        },
        city: {
            type: String,
            required: true,
        },
        postal_address: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        national_id: {
            type: String,
            required: true,
            unique: true,
        },
        department: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
