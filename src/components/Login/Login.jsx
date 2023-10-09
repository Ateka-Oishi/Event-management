/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider";


const Login = () => {
   const { logIn, signInUsingGoogle } = useContext(AuthContext);
   const navigate = useNavigate();
  
   const handleLogin = e => {
      e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
   }
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
                        onSubmit={handleLogin}
                        name=""
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
