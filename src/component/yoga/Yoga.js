import React from 'react'
 
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from 'react-bootstrap'; 
import { useEffect, useState } from 'react'; 
import { GrYoga } from "react-icons/gr";
import axios from 'axios';
import '../CareTaker.css'
function Yoga() {
  const [err, setErr] = useState('');
  const [users, setUsers] = useState([]); 


  

  useEffect(() => {
    axios.get('http://localhost:3500/yoga-api/get-yoga')
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response.data.payload)
          setUsers(response.data.payload);  
        }
      })
      .catch((err) => {
        console.log('err is', err);
        setErr(err.message);
      });
  }, []);
  
 
  

 

  return (
    <div className='register-background'>
    <div className='row justify-content-center    mb-4'>
        
        <div className="col-8 content px-3 py-3">
        {users.map((dbObj)=>(
            <div className="row justify-content-center mx-auto border p-3 mt-4">
                <div className="col-6 ">
                <div className='justify-content-center my-auto'>
                <video  className='w-100' controls >
             <source src={dbObj.video} type="video/mp4"/>
            </video>
                  </div>

                 


                </div>
                <div className="col-6   bg-black bg-opacity-75 text-white" >
                    <p className='fs-3 text-success'><GrYoga /> {dbObj.name}</p>
                    <p className='text-white'><strong className='text-danger'>description :</strong> {dbObj.description}</p>

                  </div>

            </div>
            ))}

        </div>


    </div>

</div>
  );
}

export default Yoga;
