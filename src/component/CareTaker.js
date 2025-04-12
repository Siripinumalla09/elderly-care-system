import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './CareTaker.css';


function CareTaker() {
   let  {
        register,
        handleSubmit,
        formState:{errors}

    }=useForm();

    let navigate=useNavigate();
    let [selectedFile,setSelectedFile]=useState(null)
    let [err,setErr]=useState("")


    let submitForm=(data)=>{
       let  fd=new FormData()
       fd.append("user",JSON.stringify(data))

       fd.append("photo",selectedFile)

       axios.post("http://localhost:3500/care-api/create-care",fd).then(response=>{
        
        if(response.status===201){
          navigate("/CareCard")
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
            <h1 className='text-center fs-1 label-text'>Add Care Taker</h1>
        {err.length!==0 && <p className='text-danger fs-3 text-center'>{err}</p>}
                <form onSubmit={handleSubmit(submitForm)}>
                    <label htmlFor="username"  className=" fs-4 mt-3">FullName</label>
                    <input type="text" className='form-control mt-1' placeholder='Example:John' id="name" {...register("username",{required:true})} />
                    {errors.username?.type==="required" && <p className="text-danger fw-bold fs-4">*name is required</p>}
                    <label htmlFor="qualification"  className=" fs-4 mt-3">Qualification</label>
                    <input type="text" className='form-control mt-1' placeholder='e.g btech' id="qualification" {...register("qualification",{required:true})} />
                    {errors.qualification?.type==="required" && <p className="text-danger fw-bold fs-5">*qualification is required</p>}
                    <label htmlFor="experience"  className=" fs-4 mt-3">Experience</label>
                    <input type="number" className='form-control mt-1' id="experince" placeholder='e.g 5yrs' {...register("experience",{required:true})} />
                    {errors.experience?.type==="required" && <p className="text-danger fw-bold fs-5">*experience is required</p>}
                    <label htmlFor="image"  className=" fs-4 mt-3">image</label>
                    <input type="file" className="form-control mt-3" placeholder="image" {...register("image",{required:true})} id='image' onInput={onFileSelect}/>
                        {errors.image?.type==="required"&& <p className="text-danger fw-bold fs-5">*image is required</p>}
                        <label htmlFor='tel' className=" fs-4 mt-3">contact no</label>
                        <input type='tel' className='form-control' placeholder='xxxxxx' {...register("tel",{required:true})}   />
                        {errors.tel?.type==="required"&& <p className="text-danger fw-bold fs-5">*phone no is required</p>}
                      
                      
                      
                    <button type="submit" className='btn btn-success fs-5 mt-3 d-block float-end'>Sign up</button>
                    

                </form>

            </div>
          </div>
    </div>
    </div>
  )
}

export default CareTaker