
const Feedback = () => {
    return (
        <div>
        <div
           className="row row-cols-1 row-cols-sm-2 px-5 mx-auto justify-content-center align-items-center"
           style={{ 'min-height': 'calc(100vh - 292px)' }}
        >
           <div className="d-flex justify-content-center align-items-center h-100 ">
              <div className="w-100">
                 <form>
                    <div className="form-group">
                       <label>
                          Email address
                       </label>
                       <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                       />
                    </div>

                    <div className="form-group">
                       <label>
                          Feedback
                       </label>
                       <textarea
                          className="form-control"
                          rows="3"
                       ></textarea>
                       <input className="mt-2 rounded-sm px-3 py-2 w-full" style={{backgroundColor:'#76B852', color:'white'}} type="submit" value="Give Feedback" />
                    </div>
                 </form>
              </div>
           </div>
           <div className="h-100">
              <img
                 className="img-fluid "
                 src="https://i.ibb.co/8YF9TSb/feedback.webp"
                 alt=""
              />
           </div>
        </div>
     </div>
    );
};

export default Feedback;