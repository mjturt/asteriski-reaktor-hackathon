// Admin (employee) database schema

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    idx: Number,
    privateEmail: String,
    workEmail: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    store: String,
    employeeSince: String
})

userSchema.statics.format = (user) => {
    return {
        idx: user.idx,
        privateEmail: user.privateEmail,
        workEmail: user.workEmail,
        firstName: user.firstName,
        lastName: user.lastName,
        store: user.store,
        employeeSince: user.employeeSince
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User
