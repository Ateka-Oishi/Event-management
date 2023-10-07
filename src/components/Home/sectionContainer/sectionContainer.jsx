import DoctorCard from "../../DoctorCard/DoctorCard";
import ServiceCard from "../../Servicecard/Servicecard";

const sectionContainer = ( { sectionTitle, data, cardType } ) => {

    if (cardType === '1') {
        return (
           <div>
              <div className="container">
                 <h1
                    style={{ 'background-color': '#fc6c85' }}
                    className="title fw-bold text-capitalize mt-5 mb-4 text-center rounded-pill text-white py-2 opacity-75"
                 >
                    {sectionTitle}
                 </h1>
              </div>
              <div id="services" className=" px-4">
                 <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
                    {data.map((data, i) => (
                       <ServiceCard key={i} info={data} />
                    ))}
                 </div>
              </div>
           </div>
        )
     }
     if (cardType === '2') {
        return (
           <div>
              <div className="container">
                 <h1
                    style={{ 'background-color': '#fc6c85' }}
                    className="title fw-bold text-capitalize mt-5 mb-4 text-center rounded-pill text-white py-2 opacity-75"
                 >
                    {sectionTitle}
                 </h1>
              </div>
              <div id="services" className=" px-4">
                 <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
                    {data.map((data, i) => (
                       <DoctorCard key={i} info={data} />
                    ))}
                 </div>
              </div>
           </div>
        )
     }
   //   if (cardType === '3') {
   //      return (
   //         <div>
   //            <div className="container">
   //               <h1
   //                  style={{ 'background-color': '#fc6c85' }}
   //                  className="title fw-bold text-capitalize mt-5 mb-4 text-center rounded-pill text-white py-2 opacity-75"
   //               >
   //                  {sectionTitle}
   //               </h1>
   //            </div>
   //            <div id="services" className=" px-4">
   //               <div className="row row-cols-1 row-cols-lg-3 g-3  mx-auto justify-content-center my-4">
   //                  {data.map((data, i) => (
   //                     <GalleryCard key={i} info={data} />
   //                  ))}
   //               </div>
   //            </div>
              
   //         </div>
   //      )
   //   }
   
};

export default sectionContainer;