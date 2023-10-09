/* eslint-disable react/prop-types */
import 'font-awesome/css/font-awesome.min.css'


const GalleryCard = ({ info }) => {
   //  console.log(info);
    const { image } = info;
    return (
        <div>
            <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow text-center ">
            <div style={{ overflow: 'hidden' }}>
               <img src={image} className="card-img-top" alt="" />
            </div>
         </div>
      </div>
        </div>
    );
};

export default GalleryCard;