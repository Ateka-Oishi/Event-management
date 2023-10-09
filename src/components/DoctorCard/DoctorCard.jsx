/* eslint-disable react/prop-types */
import 'font-awesome/css/font-awesome.min.css'
import { MDBContainer, MDBRating } from 'mdbreact';



const DoctorCard = ( {info} ) => {
   //  console.log(info)
   
   const { name, qualifications, doctorImage } = info;
    return (
        <div>
         
           <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow text-center p-3">
            <div style={{ overflow: 'hidden' }}>
               <img src={doctorImage} className="card-img-top" alt={name} />
            </div>
            <div className="card-body d-flex flex-column p-0">
               <div className="">
                  <h5
                     className="card-title fw-bold p-3"
                     style={{ minHeight: '3.5rem', justifyContent:'center'}}
                  >
                     {name}
                  </h5>

                  <div className="card-text">
                     <div className="p-3">{qualifications}</div>

                     <div className="p-3" style={{ color: 'goldenrod'}}>
                     <MDBContainer className=''>
                     <MDBRating iconSize="2x" feedback/>
                     </MDBContainer>
                     
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
        </div>
    );
};

export default DoctorCard;