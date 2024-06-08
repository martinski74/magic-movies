const bcrypt = require('bcrypt');
const { User } = require('../models/User');

async function register(email, password) {
    
    // check if user exists -> throw error if true
    const existing= await User.findOne({ email });
    if (existing) {
        throw new Error('Email already in use');
        }
        const user = new User({
        email,
        password: await bcrypt.hash(password, 10) 
    });
    await user.save();
    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Incorrect email or password');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Wrong password');
    }
    return user
}

module.exports = { register, login }