import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div className="max w-6xl mx-auto">
            <Header></Header>
            <Outlet>
            </Outlet>
            <div className="py-10">
            <Footer></Footer>
            </div>
           
            
        </div>
    );
};

export default Root;