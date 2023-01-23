const router = require('express').Router();
const User = require('../models/Users.js');
const CryptoJS = require("crypto-js");
const { info } = require('node-sass');
const jwt = require('jsonwebtoken')


//REGISTER

router.post('/register',async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email : req.body.email,
        password: 
        CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
          ).toString(),
        }
        );
    console.log("newUser" , newUser);
    try{
        const user = await newUser.save();
        console.log("User", user);
        res.status(201).json(user);
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'something not good'
        })
    }
   
    
})

// LOGIN
router.post('/login', async (req ,res) => {
    
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(401).json('Wrong password or username!');


        console.log(user.password);
        const  bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const  originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && 
        res.status(401).json('Wrong password or username;');

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY,
            { expiresIn: "5d" }
          );
          
          const { password, ...info } = user._doc;
      
          res.status(200).json({ ...info, accessToken });
       
    }catch(err){console.log(err),
        res.status(500).json({
            
            message: 'something not good (login)'
        })
    }
})

module.exports = router;