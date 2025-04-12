const exp=require("express")
const app=exp()
app.listen(3500,()=>console.log("server is listening on port 3500"))

let cors=require('cors')
app.use(cors())

const path=require('path')
app.use(exp.static(path.join(__dirname,'./build')))

const mclient=require("mongodb").MongoClient
mclient.connect('mongodb://127.0.0.1:27017').then((dbRef)=>{
    const dbObj=dbRef.db('eldercaresystem')
    const userCollectionObj=dbObj.collection('userCollection')
    const careCollectionObj=dbObj.collection('careCollection')
    const postcollectionObj=dbObj.collection("postcollection")
    const yogaCollectionObj=dbObj.collection("yogaCollectionObj")
    app.set('userCollectionObj',userCollectionObj)
    app.set('careCollectionObj',careCollectionObj)
    app.set('postcollectionObj',postcollectionObj)
    app.set('yogaCollectionObj',yogaCollectionObj)
    console.log("Database connection successful")
}).catch(err=>console.log("err is",err))





const userApp=require("./APIs/userApi")
app.use('/user-api',userApp)

const careApp=require("./APIs/CareTakerApi")
app.use('/care-api',careApp)

const productApp=require("./APIs/productApi")
app.use('/product-api',productApp)

const postApp=require('./APIs/enterprenurshipApi')
app.use('/post-api',postApp)

const yogaApp=require('./APIs/YogaApi')
app.use('/yoga-api',yogaApp)


//page refresh
app.use('/*',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./build/index.html'),err=>{
        if(err){
            next(err)
        }
    })
})

const InvalidPathmiddleware=(request,response,next)=>{
    response.send({message:"invalid path"})

}
app.use("*",InvalidPathmiddleware)

const errorHandlingMiddleware=(error,request,response,next)=>{
    response.send({message:error.message});
}
app.use(errorHandlingMiddleware)