const mongoose=require('mongoose');


// const mongoURL='mongodb://localhost:27017/hotels'
const mongoURL="mongodb+srv://Anshuman_Test:history150777@cluster0.mcmvxzd.mongodb.net/"

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