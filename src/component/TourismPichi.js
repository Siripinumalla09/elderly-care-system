import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'
import { useForm } from 'react-hook-form';
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap'; 
import { useState } from 'react'; 
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
const TourismPichi = ({temples})=> {

  let {register,handleSubmit,formState:{errors},setValue,getValues}=useForm()
  let [show,setshow]=useState(false)

  let showModal=()=>setshow(true)
  let closeModal=()=>setshow(false)

  let editdata=()=>{
    showModal();
    setValue("name");
    setValue("phone no")
    
  }

  let savedata=()=>{
    closeModal();
  }


  const { title,location, image, description ,rating} = temples;



  return (
    <div >
         <div className="row     justify-content-center    mb-4">
          <div className="col-8 border content px-3 py-3 mt-4">
            <div className="row justify-content-center mx-auto ">
            <div className="col-sm-6 ">
            <div className='justify-content-center my-auto'>
             <img src={image} className='w-100 d-block' height='275px' alt="" />
            </div>
            </div>
            <div className="col-sm-6   bg-light">
               <h4 className=' text-danger d-inline' ><MdTempleHindu /> {title}</h4>
               <p  className='text-black-50'> <b> {description}</b> </p> 
               <p><FaMapMarkerAlt /> {location}</p>
               <p><FaStar /> {rating}</p>
               <button className="btn btn-success float-start" onClick={()=>editdata()}> Register</button>
               <Modal show={show}
                    onHide={closeModal}
                    backdrop='static'
                    
                    >
                      <Modal.Header>
                      <Modal.Title>
                        Request a Call back
                      </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className='bg-light'>
                      {/*form to edit */}

                      <form className='px-2 py-2'>
                          
                          <input type="text"
                          placeholder='name'
                          id='name'
                          className='form-control  mt-3 mb-3 rounded-pill'
                          {...register("name")}
                          />

                          <input type="tel"
                          placeholder='phone no'
                          id='phoneno'
                          className='form-control  mt-3 mb-3  rounded-pill'
                          {...register("phoneno")}
                          />

                          <input type="email"
                          placeholder='Email'
                          id='Email'
                          className='form-control  mt-3 mb-3  rounded-pill'
                          {...register("Email")}
                          />
                          

                           
                        <textarea name="message" placeholder='message' id="" cols="50" rows="10"></textarea>
                          

                        
                          
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <button className='btn btn-primary' onClick={savedata}  >Save</button>
                      </Modal.Footer>
                    </Modal>



            </div>
            </div>
          </div>
         </div>

    </div>
    
  )
}

export default TourismPichi