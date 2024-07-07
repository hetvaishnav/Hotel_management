const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const router = express.Router();
const bcrypt=require('bcrypt');
const admin=require('../models/adminmodel.js')


router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        if (email && password) {
            const user = await admin.findOne({ email: email })
            if (user != null) {
                const ismatch = await bcrypt.compare(password, user.password)
                if (user.email = email && ismatch) {
                    res.send({ "status": "success", "message": "login succcefully" })
                 
                } else {
                    res.send({ "status": "failed", "message": "paswword incorrect" })
                }

            } else {
                res.send({ "status": "failed", "message": "you are not register admin" })
            }

        } else {
            res.send({ "status": "failed", "message": "All field require" })
        }

    } catch (error) {
        console.log(error)
        res.send({ "status": "failed", "message": "" })
    }


})



//register
router.post("/register", async (req, res) => {
    try {
        const { name, mobileno, email, password } = req.body
        const user = await admin.findOne({ email: email })

        if (user) {
            res.send({ "status": "failed", "message": "email already exists" })
        } else {
            if (name && mobileno && email && password) {
                try {
                    const salt = await bcrypt.genSalt(10)
                    const hashpassword = await bcrypt.hash(password, salt)
                    const doc = new admin({
                        name: name,
                        mobileno: mobileno,
                        email: email,
                        password: hashpassword,

                    })
                    await doc.save();


                    res.send({ "status": "pass", "message": "Register succesfull" })
                } catch (error) {
                    console.log(error)
                }


            } else {
                res.send({ "status": "failed", "message": "all field require" })
            }
        }

    } catch (error) {
        console.log(error)
    }


})


module.exports = router;