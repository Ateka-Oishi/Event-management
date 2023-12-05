/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
   const { user, logOut} = useContext(AuthContext);
   const [isNavOpen, setIsNavOpen] = useState(false);
      
   const handleToggleNav = () => {
      setIsNavOpen(!isNavOpen);
   };

      const handleLogout = (e) => {
        logOut() 
        .then(() =>console.log('user logged out'))
        .catch(error =>console.error(error))
        
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
                     
                     

                     {
                      user? <> 
                      <span className="text-white p-2 border rounded-pill">{user.email}</span>
                     <button onClick={handleLogout} className="btn btn-primary">
                        SignOut
                     </button>
                     
                     </>
                   : 
                     <Link className="nav-link " to="/login">
                      <button className='btn btn-primary'>LogIn</button>
                     </Link>
                     }  
                  
               </div>
            </div>
         </div>
      </nav>
        </div>
    );
};

export default Header;