const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const Admin = require('../../schemas/adminsSchema');
const route = express.Router();

route.post('/',async (req, res) => {
    const candidate = await Admin.findOne({email:req.body.email});
    if(candidate.email === req.body.email){
        const passwordRes = candidate.password === req.body.password;
        if(passwordRes){
            const token = jwt.sign({
                email:candidate.email,
                id: candidate._id
            },config.jwtKey,{expiresIn: 3600});
            res.status(200).json({
                token:`Bearer ${token}`
            })
        }else{
            res.status(401).json({message:"Неверный пароль"});
        }
    } else{
        res.status(404).json({message:"Пользователь c таким email не найден"});
    }
})

module.exports.route = route;