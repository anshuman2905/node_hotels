const express=require("express")
const Person=require("./../models/Person")
const router=express.Router();


router.post('/',async (req,res)=>{
  try{
    const data=req.body;

    const newPerson=new Person(data);

    const response=await newPerson.save();
    console.log("Data Saved");
    res.status(200).json(response);
    
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal Server Error"});
    
  }
})


router.get("/",async(req,res)=>{


  try{
    const data=await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data)
    

  }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal Server Error"});

  }
})


router.get("/:workType", async (req,res)=>{
  try{
      const workType=req.params.workType;
      if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log("Response Fetched");
        res.status(200).json(response);
      }
      else{
        res.send(404).json({err:"Invalid Work Type"})
      }

  }catch(err){
    console.log(err);
    res.status(500).json({error:"Error Found"});
    
  }
})

module.exports=router;