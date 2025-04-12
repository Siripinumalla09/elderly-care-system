const exp=require("express")
const yogaApp=exp.Router()

const expressAsyncHandler=require('express-async-handler')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')      

const multerObj=require('./Middleware/cloudinaryConfig')
const { request } = require("http")


yogaApp.get('/get-yoga', expressAsyncHandler(async (request, response) => {
    const yogaCollectionObj = request.app.get("yogaCollectionObj")
    let usersList = await yogaCollectionObj.find().toArray() // <-- Await here
    console.log(usersList)
    response.status(201).send({ message: "all users", payload: usersList })
  }))
  

yogaApp.get('/get-care/:username',expressAsyncHandler(async(request,response)=>{
    const yogaCollectionObj=request.app.get("yogaCollectionObj")
    let nameFromUrl=request.params.name 
    let userOfDB=await yogaCollectionObj.findOne({"name":{$eq:nameFromUrl}})
    if(userOfDB===null){
        response.status(200).send({message:"user not found"})
    }
    else{
      
        response.status(201).send({message:"user",payload:userOfDB})
    }
}))


yogaApp.use(exp.json())
yogaApp.post('/create-yoga',expressAsyncHandler(async(request,response)=>{
    const yogaCollectionObj=request.app.get('yogaCollectionObj')
    let newYoga=request.body;
    console.log("Received request body",newYoga)

    const userOfDB=await yogaCollectionObj.findOne({name:newYoga.name})
    if (userOfDB!==null){
        response.status(200).send({message:"yoga already exists"})
    }
    else{ 
    
    await yogaCollectionObj.insertOne(newYoga)
    response.status(201).send({message:"user created"})
    }
}))
 
yogaApp.delete('/delete-yoga/:id',expressAsyncHandler(async(request,response)=>{
    const yogaCollectionObj=request.app.get('yogaCollectionObj')
    let userId=(+request.params.id)
    await yogaCollectionObj.deleteOne({id:userId})
    response.status(201).send({message:"user deleted"})
}))



module.exports=yogaApp