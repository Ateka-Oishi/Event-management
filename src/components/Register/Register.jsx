/* eslint-disable no-unused-vars */
import './register.css'
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { logIn, signInUsingGoogle, setUserName }= useContext(AuthContext);
  const handleRegister = (e) => {
   e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
   // const name = e.target.name.value;
   // const email = e.target.email.value;
   // const password = e.target.password.value;
   // console.log(name, email, password);

   logIn(email, password)
       .then(result => {
         //   console.log(result.user);
           if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            Swal.fire('Registration Successful');
          } else {
            
            Swal.fire('Password does not meet the criteria');
          }
          
          

       })
       .catch(error => {
           console.error(error);
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          
         
       })
  
    
};

const handleGoogleSignIn = () => {
   signInUsingGoogle()
       .then(result => {
           console.log(result.user);
           Swal.fire({
            icon: 'success',
            text: 'You are successfully registered'
           })

       })
       .catch(error => {
           console.error(error);
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
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
                     type="text"
                     name="name"
                     placeholder="User Name"
                     required
                     
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        autoComplete="username"
                     />
                     <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        autoComplete="current-password"
                     />
                     <input
                        type="submit"
                        onSubmit={handleRegister}
                        name="register"
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