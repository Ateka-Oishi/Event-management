import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Header></Header>

            },
            
        ]
    }



])

export default router;