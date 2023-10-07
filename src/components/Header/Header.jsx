import { NavLink } from "react-router-dom";

const Header = () => {
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
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
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
                  <NavLink  className="nav-link" to="/services">
                     Services
                  </NavLink>
                  <NavLink className="nav-link " to="/feedback">
                     Feedback
                       </NavLink>
                       
                     
                     <NavLink className="nav-link " to="/register">
                        <button className="btn btn-primary">Register / Login</button>
                     </NavLink>
                  
               </div>
            </div>
         </div>
      </nav>
        </div>
    );
};

export default Header;