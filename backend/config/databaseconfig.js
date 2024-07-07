const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const DBS_URL=process.env.DBS_URL;

const dbconnect = async () => {
    try {
      await mongoose.connect(DBS_URL);
       
      console.log(
        "connected succesfully"
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = dbconnect;
  