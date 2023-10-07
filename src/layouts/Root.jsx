import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";

const Root = () => {
    return (
        <div className="max w-6xl mx-auto">
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
           
            
        </div>
    );
};

export default Root;