import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
           <nav className="flex justify-between items-center py-6">
            Health Care
            <ul className="flex gap-5">
               <li>
                <NavLink
                 to="/"
                 className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
               >
            Home
            </NavLink> 
            </li>
               <li>
                <NavLink to="/appointment"
                 
                 className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
               >
            Appointment
            </NavLink> 
            </li>
               <li>
                <NavLink to="/services"
                 
                 className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
               >
            Services
            </NavLink> 
            </li>
            <li>
                <NavLink to="/feedback"
                 
                 className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
               >
            Feedback
            </NavLink> 
            </li>

            <li>
                <NavLink to="/login"
                 
                 className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                }
               >
            Register/Login
            </NavLink> 
            </li>
            </ul>
           </nav>
        </div>
    );
};

export default Navbar;