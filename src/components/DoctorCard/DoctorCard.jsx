
import Rating from 'react-rating'


const DoctorCard = ( {info} ) => {
    console.log(info)
   const { name, qualifications, rating, docImage } = info;
    return (
        <div>
           <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow  text-capitalize text-center p-3">
            <div style={{ overflow: 'hidden' }}>
               <img src={docImage} className="card-img-top" alt={name} />
            </div>
            <div className="card-body d-flex flex-column p-0">
               <div className="">
                  <h5
                     className="card-title text-secondary fw-bold p-3"
                     style={{ 'min-height': '3.5rem' }}
                  >
                     {name}
                  </h5>

                  <div className="card-text ">
                     <div className="text-secondary p-3">{qualifications}</div>

                     <div className="p-3" style={{ color: 'goldenrod' }}>
                     <Rating
                        emptySymbol="☆"
                        fullSymbol="★"
                        initialRating={rating}
                        readonly={true}
                        fractions={6}
                     />
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