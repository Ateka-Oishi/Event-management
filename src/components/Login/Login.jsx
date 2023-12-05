/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
   const { signUp, signInUsingGoogle } = useContext(AuthContext);
   const navigate = useNavigate();
  
   const handleLogin = e => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      const user = {email, password}
      console.log(email, password);
      //   const email = e.target.email.value;
      //   const password = e.target.password.value;
      //   console.log(email, password);

        
        signUp(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate('/')
                
                Swal.fire({
                  icon: 'success',
                  title:'Login Successful!'
               }
               )
              
               
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
   const handleGoogleSignIn = () => {
      signInUsingGoogle()
          .then(result => {
              console.log(result.user);
              Swal.fire({
               icon: 'success',
               title:'Login Successful!'
            }
            )
          })
          .catch(error => {
              console.error(error);
              Swal.fire({
               icon: 'error',
               title: 'Oops... Login failed!',
               text: 'Something went wrong!',
             })
          })
  }
   
  
  return (
    <div className=" mx-auto">
         <div className="d-flex justify-content-center">
            <div className=" d-flex justify-content-center ">
               <div className="card w-100">
                  <form className="box w-100">
                     <h1>Login</h1>
                     <p className="text-muted">
                        Please LogIn!
                     </p>
                     <input
                        type="email"
                        required
                        placeholder="Email"
                        name="email"
                        autoComplete="username"
                     />
                     <input
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        autoComplete="current-password"
                     />
                     <input
                        type="submit"
                        onSubmit={handleLogin}       
                        value="Login"
                     />
                     <div className="col-md-12">
                        <p className="text-white">Login with google </p>
                        <ul className="social-network social-circle">
                           <li>
                              <a
                                 onClick={handleGoogleSignIn}
                                 className="icoGoogle"
                                 title="Google +"
                                
                              >
                                 <i className="fa fa-google-plus"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                     <p>
                     <span style={{color:'white'}}>Do not Have an Account? </span><NavLink to="/register">Register</NavLink>
                  </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
  );
};

export default Login;
