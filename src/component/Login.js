import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { loginContext } from '../contexts/loginContent';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [currentUser, loginErr, userloginStatus, loginUser] = useContext(loginContext);

  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate();

  

  useEffect(() => {
    if (userloginStatus === true) {
      navigate("/");
    }
  }, [userloginStatus]);
  let submitForm = (data) => {
    loginUser(data);
    console.log(data)
  };

  return (
    <div className="login-background">
      <div className="container">
        <div className="row form-style">
          <div className="formcss col-sm-6 col-md-4 col-lg-4 mx-auto text-white d-flex flex-column justify-content-center form background p-3 rounded">
            <h1 className="text-center fs-1 login-heading">Login</h1>
            {loginErr.length !== 0 && <p className="fs-3 text-danger text-center">{loginErr}</p>}
            <form onSubmit={handleSubmit(submitForm)}>
              <label htmlFor="username" className="fs-4 mt-3">
                username
              </label>
              <input type="text" className="form-control mt-1" placeholder="Example: John" id="username" {...register('username', { required: true })} />
              {errors.username?.type === 'required' && <p className="text-danger fw-bold fs-5">*username is required</p>}
              <label htmlFor="password" className="fs-4 mt-3">
                password
              </label>
              <input type="password" className="form-control mt-1" placeholder="Example: John" id="password" {...register('password', { required: true })} />
              {errors.password?.type === 'required' && <p className="text-danger fw-bold fs-5">*password is required</p>}
              <button type="submit" className="btn btn-success fs-5 mt-3 d-block float-end">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;