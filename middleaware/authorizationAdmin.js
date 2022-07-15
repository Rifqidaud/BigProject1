require('dotenv').config()

const db  = require('../database/models')
const User = db.users;
const jwt = require('jsonwebtoken')
const { SECRET_TOKEN } = process.env


exports.authorization = async (req, res, next) => {
    try {
        const authorization = req.header('Authorization')
        console.log(authorization)
        if (!authorization) {
            throw new Error('Belum Login')
        }
        const token = authorization.split('Bearer ')[1];
        console.log(token)
        console.log(!token)
        if(!token) {
            throw new Error('Login Error.')
        }
        console.log("ada")
        console.log(SECRET_TOKEN)
        const decodedToken = jwt.verify(token,SECRET_TOKEN)
        console.log(decodedToken)
        if(!decodedToken.userId) {
            throw new Error('Login Error.')
        }
        const user = await User.findByPk(decodedToken.userId)
        console.log(user)
        if(!user) {
            throw new Error('Login Error.')
        }
        if(user.type != 'admin'){
            throw new Error('Login Error.')
        }
        req.user = user
        return next()
    } catch (error) {
      return res.status(401).json({
          status: 'error',
          code: 401,
          message: error.message
      })
    }
};