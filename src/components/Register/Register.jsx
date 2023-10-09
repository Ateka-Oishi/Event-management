/* eslint-disable no-unused-vars */
import './register.css'
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
  const { signUp, signInUsingGoogle }= useContext(AuthContext);

  const handleRegister = (e) => {
   e.preventDefault();
   const name = e.target.name.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(name, email, password);

   signUp(email, password)
       .then(result => {
           console.log(result.user)
       })
       .catch(error => {
           console.error(error);
       })
    
};

const handleGoogleSignIn = () => {
   signInUsingGoogle()
       .then(result => {
           console.log(result.user)
       })
       .catch(error => {
           console.error(error)
       })
}

  
  return (
    <div>
         <div className=" mx-auto">
         <div className="d-flex justify-content-center">
            <div className=" d-flex justify-content-center ">
               <div className="card w-100">
                  <form className="box w-100">
                     <h1>SignUp Form</h1>
                     <p className="text-muted">
                        Please give your data.
                     </p>
                     <input
                     type="name"
                     placeholder="User Name"
                     required
                     
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        required
                        autoComplete="username"
                     />
                     <input
                        type="password"
                        placeholder="Password"
                        required
                        autoComplete="current-password"
                     />
                     <input
                        type="submit"
                        onSubmit={handleRegister}
                        name=""
                        value="Register"
                     />
                     <div className="col-md-12">
                        <p className="text-white">SignUp with google </p>
                        <ul className="social-network social-circle">
                           <li>
                              <a
                                 
                                 className="icoGoogle"
                                 title="Google +"
                                 onClick={handleGoogleSignIn}
                                 
                              >
                                 <i className="fa fa-google-plus"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                     <p>
                     <span style={{color:'white'}}>Have an Account? </span><NavLink to="/login">Login Now!</NavLink>
                  </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Register;