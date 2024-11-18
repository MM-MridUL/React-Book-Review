import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center mt-9">
           <div>
           <h2>Page Not Found</h2>
           <Link to="/"> <button className="btn btn-primary">Back to Home</button></Link>
           </div>    
        </div>
    );
};

export default ErrorPage;