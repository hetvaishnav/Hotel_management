const express = require('express')
const dotenv = require("dotenv");
dotenv.config()
const router = express.Router();
const room=require('../models/roommodel.js')



router.post("/addroom",async(req,res)=>{

    try {

        const{roomNo,floorNo}=req.body;
            
        const uroom = await room.findOne({ roomNo: roomNo })
        if (uroom) {
            res.send({ "status": "failed", "message": "room already exists" })
        }else{
                if(roomNo && floorNo){
                    try {

                        const doc = new room({
                            roomNo:roomNo,
                            floorNo:floorNo,
                        })
                        await doc.save();
    
    
                        res.send({ "status": "pass", "message": "add room succesfull" })
                    } catch (error) {
                        console.log(error)
                    }
                }
        }


    } catch (error) {
        console.log(error)
    }


})


router.get('/getrooms', async (req, res) => {
    try {
      const rooms = await room.find();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




router.delete("/delete/:id",async(req,res)=>{

    try {
        
        const{id}=req.params;
        const roomdelete=await room.findByIdAndDelete(id);
        if(!roomdelete){
            res.send({ "status": "failed", "message": "room not found" })
        }
        
        res.send({ "status": "pass", "message": "room delete succesfully" })


    } catch (error) {
        console.log(error)
    }

})

module.exports=router;