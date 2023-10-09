/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { signOut } from "firebase/auth";
import { Alert } from "react-bootstrap";

const Header = () => {
   const { user, logOut } = createContext(AuthContext);
   const [email, setEmail] = useState("");
   const [error, setError] = useState('')
   const [isNavOpen, setIsNavOpen] = useState(false);
      
   const handleToggleNav = () => {
      setIsNavOpen(!isNavOpen);
   };

      const handleLogout = async(e) => {
         e.preventDefault();
         setError("");
         try {
            await signOut(email);
      
         }catch (err){
            setError(err.message);
      
         }
        
      };
    


  
    return (
        <div>
             <nav
         className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark "
         style={{ opacity: '.7' }}
      >
         <div className="container">
            <NavLink
               className="navbar-brand border rounded-pill px-4 py-2"
               to="/"
            >
               Health Care
            </NavLink>
            <button
               className="navbar-toggler"
               type="button"
               onClick={handleToggleNav}
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span
                     className={`navbar-toggler-icon ${
                        isNavOpen ? "open" : ""
                     }`}
                  ></span>
            </button>
            <div
                  className={`collapse navbar-collapse ${
                     isNavOpen ? "show" : ""
                  }`}
               >
               <div className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                  <NavLink
                     className="nav-link active"
                     aria-current="page"
                     to="/"
                  >
                     Home
                  </NavLink>
                  
                  <NavLink className="nav-link" to="/appointment">
                     Appointment
                  </NavLink>
                  
                  <NavLink className="nav-link " to="/feedback">
                     Feedback
                       </NavLink>  
                       {error  && <Alert variant="danger">{error}</Alert> }            
                     {
                       user?.email && <span className="text-white p-2 border rounded-pill">{user.displayName}</span>
                     }
                     {
                       user?.email ? (
                     <NavLink className="nav-link " to="/">
                     <button onClick={handleLogout} className="btn btn-primary">
                        logOut
                     </button>
                     </NavLink>
                  ) : (
                     <NavLink className="nav-link " to="/register">
                        <button className="btn btn-primary">Register / Login</button>
                     </NavLink>
                  )}
                  
                  
               </div>
            </div>
         </div>
      </nav>
        </div>
    );
};

export default Header;