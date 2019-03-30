// Admin (employee) database schema

const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    idx: Number,
    privateEmail: String,
    workEmail: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    store: String,
    employeeSince: String
})

adminSchema.statics.format = (admin) => {
    return {
        idx: admin.idx,
        privateEmail: admin.privateEmail,
        workEmail: admin.workEmail,
        firstName: admin.firstName,
        lastName: admin.lastName,
        store: admin.store,
        employeeSince: admin.employeeSince
    }
}

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
