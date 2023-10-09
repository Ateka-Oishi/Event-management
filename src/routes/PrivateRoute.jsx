import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let auth = "true";
    if (!auth){
      return <Navigate to="/" />;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;