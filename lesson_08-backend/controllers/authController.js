const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// @desc login
// @route POST /auth
// @access Public
const login = asyncHandler(async(req,res) => {
    const {username, password} = req.body

    
})