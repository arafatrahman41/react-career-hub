import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-3">
            <h2 className="text-3xl font-bold">Oops!!!</h2>
            <Link to='/'><button className="btn btn-error text-lg ">Go Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;