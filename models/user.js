const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    idx: Number,
    email: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    bonusPoints: String,
    memberSince: String
})

userSchema.statics.format = (user) => {
    return {
        idx: user.idx,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        bonusPoints: user.bonusPoints,
        memberSince: user.memberSince
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User
