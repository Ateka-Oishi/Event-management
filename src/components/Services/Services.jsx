import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Services = () => {

    const [details, setDetails] = useState([])
   useEffect(() => {
      fetch('/service.json/:id')
         .then((res) => res.json())
         .then((data) => setDetails(data))
   }, [])
   console.log(details)
   const { id } = useParams()
   console.log('id', id)
   let detail = details.filter((item) => item.id === id)
   const info = detail[0]
//    console.log(detail);


    return (
        <div>
             <div className="container">
         <div>
            <h1 className="fw-bold text-capitalize mt-5 mb-4 text-center text-white opacity-75 bg-secondary px-4 py-2 rounded-pill border">
               details
            </h1>
         </div>
         <div className=" " style={{ 'min-height': '100vh' }}>
            <div className="card text-center">
               <div className="card-header fs-2">{detail.length && info['title']}</div>
               <div className="card-body">
                  <div>
                     <img src={detail.length && "/"+info[`image`]} alt="" />
                  </div>
                  <div className="card-text fs-3">
                     {detail.length && info['fullDetails']}
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