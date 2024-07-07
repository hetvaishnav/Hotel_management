const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const router = express.Router();
const employee = require('../models/empmodel.js')
const bcrypt=require('bcrypt');

router.post("/register", async (req, res) => {
    try {
        const { name, mobileno, email, address, emptype, acno, salary} = req.body
        const user = await employee.findOne({ email: email })

        if (user) {
            res.send({ "status": "failed", "message": "email already exists" })
        } else {
            if (name && mobileno && email && address && emptype && acno && salary) {
                try {
                         
                            const doc = new employee({
                                name: name,
                                mobileno: mobileno,
                                email: email,
                                address: address,
                                emptype: emptype,
                                acno: acno,
                                salary: salary
        
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


router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;
        if (email && password) {
            const user = await employee.findOne({ email: email })
            if (user != null) {
               const ismatch = await bcrypt.compare(password, user.password)
                if (user.email == email &&ismatch ) {
                    res.send({ "status": "success", "message": " emp login succcefully" })
                 
                } else {
                    res.send({ "status": "failed", "message": "paswword incorrect" })
                }

            } else {
                res.send({ "status": "failed", "message": "you are not register warden" })
            }

        } else {
            res.send({ "status": "failed", "message": "All field require" })
        }

    } catch (error) {
        console.log(error)
        res.send({ "status": "failed", "message": "" })
    }


})








router.get("/allemployee", async (req, res) => {

    try {
        const allemployee = await employee.find({});

        if (allemployee) {
            console.log("all emloyee" + allemployee)
            res.send(allemployee);
        }

    } catch (error) {
        console.log(error)
    }

});

//delete

router.delete("/delete/:id", async (req, res) => {

    try {

        const { id } = req.params;
        const empdelete = await employee.findByIdAndDelete(id);
        if (!empdelete) {
            res.send({ "status": "failed", "message": "Employee not found" })
        }

        res.send({ "status": "pass", "message": "Employee delete succesfully" })


    } catch (error) {
        console.log(error)
    }

})
//find indivisule employee
router.get("/manageemployee/:id",async (req, res) => {
      try {
        const { id } = req.params;
        const empData = await employee.findById(id) 
        res.send(empData);
      } catch (error) {
        console.log(error)
      }

    })

//update

router.put("/update/:id", async (req, res) => {

    try {

        const { id } = req.params;
        const updatformeemp = req.body;
        console.log(updatformeemp)
        const existingemp = await employee.findById(id);
        if (!existingemp) {
            res.send({ "status": "failed", "message": "employee not found" })
        }

        console.log(updatformeemp.name);

        const updatedemp = await employee.findByIdAndUpdate(id, updatformeemp, { new: true });
        console.log("updated employee -->" + updatedemp)
        if (updatedemp) {
            res.send({ "status": "pass", "message": "updated succesfully" })
        }
    } catch (error) {
        console.log(error)
    }

})



module.exports = router;