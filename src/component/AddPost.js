import React ,{useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './post.css'
function AddPost() {
    let {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()

    let navigate=useNavigate()
    let [selectedFile,setSelectedFile]=useState(null)
    let [err,setErr]=useState("")
    
    let submitForm=(data)=>{ 
        axios.post("http://localhost:3500/post-api/add-post",data).then(response=>{
            if(response.status===201){
                navigate("/ViewPost")
            }
            else if(response.status!==201){
                setErr(response.data.message)
            }
        }).catch(err=>{
            console.log("err is",err)
            if(err.response){
                setErr(err.message)
                console.log("error setted1")
            }
            else if(err.request){
                setErr(err.message)
            }
            else{
                setErr(err.message)
                console.log("error setted3")
            }
        })
    }

 

  return (
    <div className='post register-background'>
          <div className="container">
            <div className='row'>
            
                    <div className='col-sm-8 col-md-6 col-lg-4 mx-auto mt-5 rounded   text-white  mb-5 p-3'>
                    <h1 className='text-center fs-1 label-text'>Add Post</h1>
                        {err.length!==0 && <p className='text-danger fs-3'>{err}</p>}
                        <form onSubmit={handleSubmit(submitForm)} >
                            <label htmlFor='name' className='fs-3 mt-3'>title</label>
                            <input type="text" className='form-control mt-1' placeholder='Example:John' id="name" {...register("title",{required:true})}/>
                            {errors.title?.type==="required" && <p className='text-danger fs-3'>*title is required</p>}
                            
                            <label htmlFor='email' className='fs-3 mt-3'>description</label>
                            <input type="text" className='form-control mt-1' placeholder='description' id="email" {...register("description",{required:true})}/>
                            {errors.description?.type==="required" && <p className='text-danger fs-3'>*description is required</p>}
                        
                            
                            <label htmlFor='image' className='fs-3 mt-3'>image</label>
                            <input type="url" className='form-control mt-1' placeholder='image' id="image" {...register("image",{required:true})} />
                            {errors.image?.type==="required" && <p className='text-danger fs-3'>*image is required</p>}

                            <label htmlFor="contact" className='fs-3 mt-3'>contact Number</label>
                            <input type="number" className='form-control mt-1' id="contact" placeholder='xxxxxx'{...register("contact",{required:true})}/>
                            <button type="submit" className='btn btn-success fs-5 mt-3 d-block float-end'>sign up</button>
                            </form>
                    </div>
             </div>
          </div>
    </div>
  )
}

export default AddPost