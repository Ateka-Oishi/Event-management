import { NavLink } from "react-router-dom";
import './card.css'
const ServiceCard = ( {info} ) => {
    console.log(info)
    const { image, title, fee, id, details } = info;

    return (
        <div>
             <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow  text-capitalize text-center ">
            <div style={{ overflow: 'hidden' }}>
               <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body d-flex flex-column p-0">
               <div className="">
                  <h5
                     className="card-title text-secondary fw-bold p-3"
                     style={{ 'min-height': '3.5rem' }}
                  >
                     {title}
                  </h5>
                  <small
                     className="card-title text-secondary fw-bold p-3"
                     style={{ 'min-height': '3.5rem' }}
                  >
                     {details}
                  </small>

                  <div className="card-text ">
                     <div className=" text-secondary p-3">
                        <span className="fs-3">Fee : $ {fee}</span>
                     </div>
                  </div>

                  <div className="p-3">
                     <NavLink
                        to={`/services/${id}`}
                        className="btn btn-primary text-capitalize w-100 mt-auto rounded-pill"
                     >
                        Details
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    );
};

export default ServiceCard;