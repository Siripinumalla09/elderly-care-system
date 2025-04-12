import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'; 


function YogaAsanas() {
   let  {
        register,
        handleSubmit,
        formState:{errors}

    }=useForm();

    let navigate=useNavigate();
    let [selectedFile,setSelectedFile]=useState(null)
    let [err,setErr]=useState("")

    let submitForm=(data)=>{ 

       axios.post("http://localhost:3500/yoga-api/create-yoga",data).then(response=>{
        
        if(response.status===201){
          navigate("/")
        }
        else if(response.status!==201){
          setErr(response.data.message);

        }
       }).catch(err=>{
        console.log("err is",err)
        if(err.response){
          setErr(err.message)
          console.log("error setted1")
        }
        else if(err.request){
          setErr(err.message)
          console.log("error setted2")
        }
        else{
          setErr(err.message)
          console.log("error setted3")
        }
       })

    }

    const onFileSelect=(e)=>{
      console.log(e.target.files[0])
      setSelectedFile(e.target.files[0])
    }

  return (
    <div className="register-background">
    <div className='container'>
        
          <div className='row container'>

            <div className='col-sm-8 col-md-6 col-lg-4 mx-auto  mt-5 rounded   text-white bg-opacity-75 mb-5'>
            <h1 className='text-center fs-1 label-text'>Add Yoga</h1>
        {err.length!==0 && <p className='text-danger fs-3 text-center'>{err}</p>}
                <form onSubmit={handleSubmit(submitForm)}>
                    <label htmlFor="username"  className=" fs-4 mt-3">name</label>
                    <input type="text" className='form-control mt-1' placeholder='Example:John' id="name" {...register("name",{required:true})} />
                    {errors.username?.type==="required" && <p className="text-danger fw-bold fs-4">*name is required</p>}
                    <label htmlFor="description"  className=" fs-4 mt-3">description</label>
                    <input type="text" className='form-control mt-1' placeholder='e.g btech' id="description" {...register("description",{required:true})} />
                    {errors.description?.type==="required" && <p className="text-danger fw-bold fs-5">*description is required</p>}
               
                    <label htmlFor="video "  className=" fs-4 mt-3">video </label>
                    <input type="url" className="form-control mt-3" placeholder="video url" {...register("image",{required:true})} id='video ' onInput={onFileSelect}/>
                        {errors.video ?.type==="required"&& <p className="text-danger fw-bold fs-5">*video  is required</p>}
           
                      
                      
                      
                    <button type="submit" className='btn btn-success fs-5 mt-3 d-block float-end'>Sign up</button>
                    

                </form>

            </div>
          </div>
    </div>
    </div>
  )
}

export default YogaAsanas