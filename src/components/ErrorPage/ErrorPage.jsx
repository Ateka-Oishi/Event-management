import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div>
          <div style={{ 'min-height': 'calc(100vh - 245px)' }}>
         <div className="notFoundImage d-flex justify-content-center">
            <img className="img-fluid" src="https://i.ibb.co/YpvxRdQ/404.jpg" alt="" />
         </div>
      </div>  
        </div>
    );
};

export default ErrorPage;