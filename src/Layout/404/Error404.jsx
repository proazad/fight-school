import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container mx-auto">
            <div className="h-screen flex flex-col items-center justify-center">
                <h2 className="text-9xl font-bold">4<span className="text-secondary">0</span>4</h2>
                <h2 className="text-7xl font-bold">Not Found</h2>
                <Link to="/" className="underline text-2xl mt-5">Go to Home</Link>
            </div>
        </div>
    );
};

export default Error404;