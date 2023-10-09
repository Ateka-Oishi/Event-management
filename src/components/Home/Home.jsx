
import { useEffect, useState } from 'react';
import './Home.css'
import SectionContainer from './sectionContainer/sectionContainer';

const Home = () => {

   const [serviceInfo, setServiceInfo] = useState([]);
   const [docInfo, setDocInfo] = useState([]);
   const [galleryInfo, setGalleryInfo] = useState([])


   useEffect(() => {
      fetch('service.json')
         .then((res) => res.json())
         .then((data) => setServiceInfo(data));
      fetch('doctorsData.json')
         .then((res) => res.json())
         .then((data) => setDocInfo(data));

      fetch('gallery.json')
        .then((res) => res.json())
        .then((data) => setGalleryInfo(data));
     
   }, [])
   
    return (
        <div>
             <div className="banner ">
            <div className="heading d-flex justify-content-center align-items-center flex-column">
               <h1 className="text-center">
               Embrace Health and Wellness
               </h1>
               <p className="text-center">
               Home for Health Care Development
               </p>
            </div>
            <SectionContainer
            sectionTitle= 'Our Event Services'
            data={serviceInfo}
            cardType={1}
            >
            </SectionContainer>
            <SectionContainer
            sectionTitle='Meet Our Health Specialist'
            data={docInfo}
            cardType={2}
            >
            </SectionContainer>

            <SectionContainer
               sectionTitle="HealthTech Advancements"
               data={galleryInfo}
               cardType={3}
            ></SectionContainer>
         </div>
         <div>
         </div>
        </div>
    );
};

export default Home;