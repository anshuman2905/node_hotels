const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL=process.env.MONGO_URL;


// const mongoURL='mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


const db=mongoose.connection;


db.on('connected',()=>{
    console.log("Connected Succesfully");
});

db.on('error',(err)=>{
    console.log("Error",err);
});

db.on('disconnected',()=>{
    console.log("Disconnected Succesfully");
});


module.exports=db