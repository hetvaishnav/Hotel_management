const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel.js');
const Room = require('../models/roommodel.js'); // Make sure to import the Room model
//const Room =require('../models/roommodel.js')
dotenv.config();
const router = express.Router();


// Login Route
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if email and password are provided
      if (!email || !password) {
        return res.status(400).json({ status: 'failed', message: 'All fields are required' });
      }
  
      // Find the user by email
      const user = await Student.findOne({ email });
  
      // If user is not found
      if (!user) {
        return res.status(404).json({ status: 'failed', message: 'You are not a registered user' });
      }
  
      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
  
      // If password does not match
      if (!isMatch) {
        return res.status(401).json({ status: 'failed', message: 'Password incorrect' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });
  
      // Send the response with token
      res.status(200).json({ status: 'success', message: 'Login successfully', token });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ status: 'failed', message: 'Server error' });
    }
  });
router.post("/register", async (req, res) => {
    try {
        const { name, mobileno, email, password, password_confirmation, address, collegeName, department, year, fee, roomNo } = req.body;
        const user = await Student.findOne({ email });

        if (user) {
            res.send({ status: "failed", message: "Email already exists" });
        } else {
            if (name && mobileno && email && password && password_confirmation && address && collegeName && department && year && fee && roomNo) {
                if (password === password_confirmation) {
                    const room = await Room.findOne({ roomNo });

                    if (!room) {
                        res.send({ status: "failed", message: "Room does not exist" });
                    } else {
                        const salt = await bcrypt.genSalt(10);
                        const hashedPassword = await bcrypt.hash(password, salt);

                        const newStudent = new Student({
                            name,
                            mobileno,
                            email,
                            password: hashedPassword,
                            address,
                            collegeName,
                            department,
                            year,
                            fee,
                            room: room._id,
                        });

                        await newStudent.save();
                        const savedUser = await Student.findOne({ email }).populate('room');

                        const token = jwt.sign({ userID: savedUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

                        res.send({ status: "pass", message: "Register successful", token });
                    }
                } else {
                    res.send({ status: "failed", message: "Password and password confirmation must match" });
                }
            } else {
                res.send({ status: "failed", message: "All fields are required" });
            }
        }
    } catch (error) {
        console.log(error);
        res.send({ status: "failed", message: "Server error" });
    }
});


// Fetch all students
router.get('/getstudents', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete a student
  router.delete('/students/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Student.findByIdAndDelete(id);
      res.json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Update a student
  router.put('/ustudents/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedStudent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




module.exports = router;
