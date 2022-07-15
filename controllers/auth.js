require('dotenv').config()

const db  = require('../database/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET_TOKEN } = process.env
const User = db.users

exports.register = async (req, res, next) => {
    try {
        const { name, username, password } = req.body

        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if (user) {
            throw new Error(
                'User with this username already exist. Please use other username.'
            )
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        await User.create({
            username: username,
            password: hashedPassword,
            name: name,
            type: "user"
        })

        return res.status(201).json({
            status: 'success',
            code: 201,
            message: 'Success register user.'
        })
    
    } catch (error) {
        return next(error)
    }
}
exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({
            where: {
                username: username
            }
        })
    
    if (!user) {
        throw new Error('User with this username not found.')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Password not valid.')
    }
    const accessToken = jwt.sign(
        { userId: user.id },
        SECRET_TOKEN,
        { expiresIn: '1h'}
    )
    return res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Success login.',
        data: {
            access_token: accessToken,
            type: user.type,
        }
    })
} catch (error) {
    return next(error)
}
}