import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CareCard.css'
import { useNavigate } from 'react-router-dom';

import './post.css'
function ViewPost() {
  const [err, setErr] = useState('');
  const [users, setUsers] = useState([]); 

const navigate=useNavigate();
  

  useEffect(() => {
    axios.get('http://localhost:3500/post-api/get-post')
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data.payload)
          setUsers(response.data.payload); // <-- Issue might be here
        }
      })
      .catch((err) => {
        console.log('err is', err);
        setErr(err.message);
      });
  }, []);

  const createpost=()=>{
    navigate('/AddPost')
  }
  
 
  

 

  return (
    <div className= 'post'>
        <button  className='btn btn-outline-primary' onClick={()=>createpost()} >Add POst</button>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center cards p-3 mt-2">
        {users?.map((userObj) => (
          <div className="col mt-3" key={userObj.id}>
            <div className="card card-hover card-style" >
              <img src={userObj.image} className="mx-auto  profile-image" alt="" height='200px'/>
              <div className="card-body bg-secondary" height="200px">
                <p className=" name"><b className='fs-4'>title:</b> {userObj.title}</p> 
                <p className=" name"><b className='fs-4'>description:</b> {userObj.description}</p>  
                <p className=' name bg-info p-3 w-75 fs-5 fw-bold'>contact: {userObj.contact}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default ViewPost;
