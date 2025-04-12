const exp=require("express")
const careApp=exp.Router()

const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')      

const multerObj=require('./Middleware/cloudinaryConfig')
const { request } = require("http")


careApp.get('/get-care', expressAsyncHandler(async (request, response) => {
    const careCollectionObj = request.app.get("careCollectionObj")
    let usersList = await careCollectionObj.find().toArray() // <-- Await here
    console.log(usersList)
    response.status(201).send({ message: "all users", payload: usersList })
  }))
  

careApp.get('/get-care/:username',expressAsyncHandler(async(request,response)=>{
    const careCollectionObj=request.app.get("careCollectionObj")
    let nameFromUrl=request.params.name 
    let userOfDB=await careCollectionObj.findOne({"name":{$eq:nameFromUrl}})
    if(userOfDB===null){
        response.status(200).send({message:"user not found"})
    }
    else{
      
        response.status(201).send({message:"user",payload:userOfDB})
    }
}))


careApp.use(exp.json())
careApp.post('/create-care',multerObj.single("photo"),expressAsyncHandler(async(request,response)=>{
    const careCollectionObj=request.app.get('careCollectionObj')
    let newUser=JSON.parse(request.body.user)
    console.log("Received request body",newUser)

    const userOfDB=await careCollectionObj.findOne({username:newUser.username})
    if (userOfDB!==null){
        response.status(200).send({message:"user already exists"})
    }
    else{
    newUser.image=request.file.path;
    
    await careCollectionObj.insertOne(newUser)
    response.status(201).send({message:"user created"})
    }
}))
 
careApp.delete('/delete-care/:id',expressAsyncHandler(async(request,response)=>{
    const careCollectionObj=request.app.get('careCollectionObj')
    let userId=(+request.params.id)
    await careCollectionObj.deleteOne({id:userId})
    response.status(201).send({message:"user deleted"})
}))



module.exports=careApp