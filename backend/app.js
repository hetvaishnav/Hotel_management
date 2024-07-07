const dbconnect=require('./config/databaseconfig.js');
const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
const port=process.env.PORT;
const studentroutes=require('./routes/studentroutes.js')
const emproutes=require('./routes/emproutes.js')
const roomroutes=require('./routes/roomroutes.js')
const adminroutes=require('./routes/adminroutes.js')
const wardenroutes=require('./routes/wardenroutes.js')
const noticeroutes =require('./routes/noticeroutes.js')
const menuroutes=require('./routes/menuroutes.js')
//databaseconnectivity
dbconnect();

//corspolicy
var corsOptions = {
  origin: `http://localhost:5173`,
  methods:"GET,POST,PUT,DELETE,CATCH",
  credentials:true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

//jason
app.use(express.json())

//routelevelapi
app.use("/api/student",studentroutes);
app.use("/api/employee",emproutes);
app.use("/api/room",roomroutes);
app.use("/api/admin",adminroutes);
app.use("/api/warden",wardenroutes);
app.use("/api/notice",noticeroutes);
app.use("/api/menu",menuroutes)


app.listen(port,()=>{
    console.log(`server listimg at http://localhost:${port}`)
})
