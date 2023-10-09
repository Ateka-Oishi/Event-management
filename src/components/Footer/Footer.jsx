import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        
        <div className="bg-dark text-white p-4" style={{ zIndex: '10' }}>
         <div className="container text-center">
            <div className="d-flex flex-column flex-sm-row justify-content-between  mb-3">
               <div className="">
                  <ul
                     style={{ listStyleType: 'none' }}
                     className="text-center fs-4  text-white"
                  >
                     <div>
                        <NavLink
                           className="text-decoration-none text-white"
                           to="/"
                        >
                           Home
                        </NavLink>
                     </div>
                     <div>
                        <NavLink
                           className="text-decoration-none text-white"
                           to="/appointment"
                        >
                           Appointment
                        </NavLink>
                     </div>
                     <div>
                     <NavLink
                           className="nav-link text-white"
                           to="/service"
                        >
                           Services
                        </NavLink>
                     </div>
                  </ul>
               </div>

               <div>
                  <h1>Contact us</h1>
                  <div className="flex justify-center">
                     <a
                        href=""
                        className="mx-2 text-white"
                     >
                    <FaFacebookSquare style={{fontSize:'1.8rem'}}></FaFacebookSquare>
                     </a>
                     <a
                        href=""
                        className="mx-2 text-white"
                     >
                        <FaGithubSquare style={{fontSize:'1.8rem'}}></FaGithubSquare>
                        
                     </a>
                     <a
                        href=""
                        className="mx-2 text-white"
                     >

                        <FaTwitterSquare style={{fontSize:'1.8rem'}}></FaTwitterSquare>
                     </a>
                  </div>
               </div>
            </div>
            <p>Copyright &copy;2023 <span style={{color:"#0D6EFD"}}>HealthCare.</span></p>
         </div>
      </div>
     
    );
};

export default Footer;