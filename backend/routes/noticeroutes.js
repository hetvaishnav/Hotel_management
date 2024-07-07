const express = require('express');
const router = express.Router();
const Notice = require('../models/noticemodel'); // Assuming your notice model file is named noticeModel.js

// Route to add a notice
router.post("/addnotices", async (req, res) => {
  try {
    const { title, content, category } = req.body;

    // Create a new notice instance
    if(title &&content && category){
        const notice = new Notice({
            title:title,
            content:content,
            category:category
          });
               // Save the notice to the database
 
          await notice.save();

    res.send({ "status": "pass", "message": "add notice succesfull" })
    }else{
        res.send({ "status": "failed", "message": "all field require" })
    }    
  } catch (error) {
    console.error('Error adding notice:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


router.get("/allnotices", async (req, res) => {
  try {
    // Fetch all notices from the database
    const notices = await Notice.find();

    if (notices.length === 0) {
      return res.status(404).json({ message: "No notices found" });
    }
console.log(notices)
    // Return the notices
    res.status(200).json(notices);
  } catch (error) {
    console.error('Error fetching notices:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


router.delete("/delete/:id", async (req, res) => {

  try {

      const { id } = req.params;
      const noticedelete = await Notice.findByIdAndDelete(id);
      if (!noticedelete) {
          res.send({ "status": "failed", "message": "warden not found" })
      }

      res.send({ "status": "pass", "message": "warden delete succesfully" })


  } catch (error) {
      console.log(error)
  }

})

module.exports = router;
