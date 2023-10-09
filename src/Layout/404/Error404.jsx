import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Error404 = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="h-screen flex flex-col items-center text-center justify-center">
                <h2 className="text-8xl lg:text-9xl font-bold">4<span className="text-success">0</span>4</h2>
                <h2 className="text-5xl lg:text-7xl font-bold">Not Found</h2>
                <Link to="/" className="underline text-2xl mt-5">Go to Home</Link>
            </div>
        </div>
    );
};

export default Error404;