const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const router = express.Router();
const warden = require("../models/wardenmodel")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

router.post("/register", async (req, res) => {
    try {
        const { name, mobileno, email, address, acno, salary, password } = req.body
        const user = await warden.findOne({ email: email })

        if (user) {
            res.send({ "status": "failed", "message": "email already exists" })
        } else {
            if (name && mobileno && email && address && acno && salary && password) {
                try {
                    const salt = await bcrypt.genSalt(10)
                    const hashpassword = await bcrypt.hash(password, salt)
                    const doc = new warden({
                        name: name,
                        mobileno: mobileno,
                        email: email,
                        address: address,
                        acno: acno,
                        salary: salary,
                        password: hashpassword,

                    })
                    await doc.save();
                    const saved_user = await warden.findOne({ email: email })
                    //generate JWT taken                
                    const token = jwt.sign({ userID: saved_user._id },
                        process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                    res.send({ "status": "pass", "message": "Register succesfull", "token": token })
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

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        if (email && password) {
            const user = await warden.findOne({ email: email })
            if (user != null) {
                const ismatch = await bcrypt.compare(password, user.password)
                if (user.email = email && ismatch) {
                    const token = jwt.sign({ userID: user._id },
                        process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                    res.send({ "status": "success", "message": "login succcefully", "token": token })
                } else {
                    res.send({ "status": "failed", "message": "paswword incorrect" })
                }

            } else {
                res.send({ "status": "failed", "message": "you are not register user" })
            }

        } else {
            res.send({ "status": "failed", "message": "all field require" })
        }

    } catch (error) {
        console.log(error)
        res.send({ "status": "failed", "message": "" })
    }


})

router.get("/allwarden", async (req, res) => {

    try {
        const allwarden = await warden.find({});

        if (allwarden) {
            console.log("all emloyee" + allwarden)
            res.send(allwarden);
        }

    } catch (error) {
        console.log(error)
    }

});


router.delete("/delete/:id", async (req, res) => {

    try {

        const { id } = req.params;
        const empdelete = await warden.findByIdAndDelete(id);
        if (!empdelete) {
            res.send({ "status": "failed", "message": "warden not found" })
        }

        res.send({ "status": "pass", "message": "warden delete succesfully" })


    } catch (error) {
        console.log(error)
    }

})

//find indivisule employee
router.get("/managewarden/:id",async (req, res) => {
    try {
      const { id } = req.params;
      const wardenData = await warden.findById(id) 
      res.send(wardenData);
    } catch (error) {
      console.log(error)
    }

  })

//update

router.put("/update/:id", async (req, res) => {

  try {

      const { id } = req.params;
      const updatformwarden = req.body;
      console.log(updatformwarden)

      const existingwarden = await warden.findById(id);
      if (!existingwarden) {
          res.send({ "status": "failed", "message": "warden not found" })
      }

      console.log(updatformwarden.name);

            if(updatformwarden.password){
                const salt = await bcrypt.genSalt(10);
                updatformwarden.password =
                  await bcrypt.hash(
                    updatformwarden.password,
                    salt
                  );
            }

      const updatedwar = await warden.findByIdAndUpdate(id, updatformwarden, { new: true });
      console.log("updated employee -->" + updatedwar)
      if (updatedwar) {
          res.send({ "status": "pass", "message": "updated succesfully" })
      }
  } catch (error) {
      console.log(error)
  }

})


module.exports = router;