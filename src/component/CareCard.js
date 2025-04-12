import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CareCard.css'
import { FaPhone } from "react-icons/fa6";


function CareCard() {
  const [err, setErr] = useState('');
  const [users, setUsers] = useState([]); 


  

  useEffect(() => {
    axios.get('http://localhost:3500/care-api/get-care')
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response.data.payload)
          setUsers(response.data.payload); // <-- Issue might be here
        }
      })
      .catch((err) => {
        console.log('err is', err);
        setErr(err.message);
      });
  }, []);
  return (
    <div class="post">
    <div className='container'>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center cards">
        {users?.map((userObj) => (
          <div className="col mt-3" key={userObj.id}>
            <div className="card p-4    bg-opacity-50 " height="600px">
            <img src={userObj.image} className="mx-auto  profile-image" alt="" height='200px' />
              <div className="   float-start p-2 mt-2 " >
                <h5 className=" name "> Caretaker:{userObj.username}</h5> 
                <p className="   name"><strong>Experience</strong>: {userObj.experience} yrs</p> 
                <p className=" name"><strong>Qualification</strong>: {userObj.qualification}</p> 
                <button className='btn btn-success text-white'><FaPhone /> {userObj.tel}</button> 
              
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    </div>
  );
}

export default CareCard;
