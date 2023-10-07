
import { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Card from '../Servicecard/Servicecard'

const Home = () => {
    const dataLoad = useLoaderData();
    console.log(dataLoad);
    const [serviceInfo, setServiceInfo] = useState([])
    const [docInfo, setDocInfo] = useState([])
    const [galleryInfo, setGalleryInfo] = useState([])
    useEffect(() => {
       fetch('service.json')
          .then((res) => res.json())
          .then((data) => setServiceInfo(data))
       fetch('/doctorsData.json')
          .then((res) => res.json())
          .then((data) => setDocInfo(data))
       fetch('/gallery.json')
          .then((res) => res.json())
          .then((data) => setGalleryInfo(data))
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
         </div>
         

         
         
        
        
         
        </div>
    );
};

export default Home;