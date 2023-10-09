import { useParams, useLoaderData } from "react-router-dom";

const Services = () => {
   const services = useLoaderData();
   const { id } = useParams();
   const service  = services.find(service=> service.id ==id)

    return (
        <div>
             <div className="container">
         <div>
            <h1 className="fw-bold mt-5 mb-4 text-center text-white opacity-75 bg-secondary px-4 py-2 rounded-pill border">
               Details
            </h1>
         </div>
         <div className=" " style={{ minHeight: '100vh' }}>
            <div className="card text-center">
               <div className="card-header fs-2">{service.title}</div>
               <div className="card-body">
                  <div>
                     <img className="mx-auto" src={service.image} alt="" />
                  </div>
                  <div className="card-text fs-3">
                     {service.FullDetails}
                  </div>
               </div>
               <div className="card-footer text-muted">Updated : 2 days ago</div>
            </div>
         </div>
      </div>
        </div>
    );
};

export default Services;