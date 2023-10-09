import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Appointment from "../components/Appointment/Appointment";
import Feedback from "../components/Feedback/Feedback";
import Services from "../components/services/services";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path: '/',
            element: <Home></Home>
                     

            },
            
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/service/:id',
                element:<Services></Services>,
                loader: ()=>fetch('/service.json')
            },
            {
                path:'/feedback',
                element:<Feedback></Feedback>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            
           
           
            
        ]
    }



])

export default router;