import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Navbar from "../components/Navbar/Navbar";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Navbar></Navbar>


            }
        ]
    }



])

export default router;