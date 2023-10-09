/* eslint-disable no-unused-vars */
import './register.css'
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider';
import { Alert } from 'bootstrap';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp }= useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
   
   
   e.preventDefault();
    setError("");
   try {
      signUp(name, email, password);
      navigate("/");

   }catch (err){
      setError(err.message);

   }
  
};

  
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
                     {error  && <Alert variant="danger">{error}</Alert> }
                     <input
                     type="name"
                     placeholder="User Name"
                     required
                     
                     onChange={(e) => setName(e.target.value)}
                     />
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