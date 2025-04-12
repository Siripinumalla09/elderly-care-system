const exp=require("express")
const postApp=exp.Router()

//import express-async-handler
const expressAsyncHandler=require("express-async-handler")
 

//import //bcryptjs module 

postApp.use(exp.json())

  
postApp.post('/add-post',expressAsyncHandler(async (request,response)=>{
   //get user collection
   const postcollectionObj=request.app.get("postcollectionObj")
  //get new user 
  const newUser=request.body; 
 
    await  postcollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"});
     
 
  
}) 
);



 

//update land details

postApp.put("/update-post",expressAsyncHandler(async (request,response)=>{
    //get landcolletionobj
    const postcollectionObj=request.app.get("postcollectionObj");

    let modifiedData=request.body;

    let dbRes=await postcollectionObj.updateOne(
        {_id:modifiedData._id},
        {$set:{...modifiedData}}

    );
  
    console.log(modifiedData)
    response.status(200).send({message:"data updated"});

}));


postApp.get("/get-post",expressAsyncHandler(async (request,response)=>{
    //get landolletionobj
    const postcollectionObj=request.app.get("postcollectionObj");


    //get users from db
    let postData=await postcollectionObj.find().toArray();
    console.log(postData)
    response.status(200).send({message:"data details",payload:postData})
}))


module.exports=postApp