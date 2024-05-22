const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expires: '3d'})
}

// login
const loginUser = async (req, resp) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        
        // create a token
        const token = createToken(user._id)

        resp.status(200).json({email, token})
    }
    catch (error) {
        resp.status(400).json({error: error.message})
    }
}


// sign up
const signupUser = async (req, resp) => {
    const { email, password , username } = req.body

    try {
        const user = await User.create({email, password, username})
        
        // create a token
        const token = createToken(user._id)

        resp.status(200).json({email, token})
    }
    catch (error) {
        resp.status(400).json({error: error.message})
    }
}




module.exports = { loginUser, signupUser }