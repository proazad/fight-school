import bg from "../../assets/background-3.png";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="bg-neutral py-10">
      <div
        style={{ background: `url(${bg})` }}
        className="container rounded-lg p-10 lg:w-5/12 mx-auto"
      >
        <h3 className="text-4xl text-white">Password Reset form</h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-success">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your Email for resetting password"
              name="email"
              className="input input-bordered input-success"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success">Submit</button>
          </div>
          <div className="form-control mt-6">
            <p className="text-success">
              <Link to="/signin" className="text-info">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
