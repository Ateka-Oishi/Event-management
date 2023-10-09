/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider";
import { Alert } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { logIn } = useContext(AuthContext);
   const navigate = useNavigate();
  
   const handleLogin = async(e) => {
      e.preventDefault();
      setError("");
      try {
         await logIn(name, email, password);
         navigate("/register");
   
      }catch (err){
         setError(err.message);
   
      }
     
   };
   
   
  
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
                     {error  && <Alert variant="danger">{error}</Alert> }
                     <input
                        type="email"
                        placeholder="Email"
                        required
                        autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <input
                        type="password"
                        placeholder="Password"
                        required
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <p className="text-white">{error}</p>
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
                                 // onClick={}
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
