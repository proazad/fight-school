import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import bg from "../../assets/background-1.png";
import { Link } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";
const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const showPassword = (e) => {
    setShowPass(e);
  };
  return (
    <div className="bg-neutral py-10">
      <div
        style={{ background: `url(${bg})` }}
        className="container rounded-lg p-10 lg:w-5/12 mx-auto"
      >
        <h3 className="text-4xl text-white">Registration</h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-success">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-success"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-success">Photo</span>
            </label>
            <input
              type="url"
              placeholder="Enter your photo url"
              className="input input-bordered input-success"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-success">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered input-success"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-success">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered input-success"
              required
            />
            <p
              onClick={() => showPassword(!showPass)}
              className="absolute right-2 top-12 block cursor-pointer"
            >
              {showPass ? (
                <AiOutlineEye className="text-2xl" />
              ) : (
                <AiOutlineEyeInvisible className="text-2xl" />
              )}
            </p>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-success">Confirm Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              name="retypepassword"
              className="input input-bordered input-success"
              required
            />
            <p
              onClick={() => showPassword(!showPass)}
              className="absolute right-2 top-12 block cursor-pointer"
            >
              {showPass ? (
                <AiOutlineEye className="text-2xl" />
              ) : (
                <AiOutlineEyeInvisible className="text-2xl" />
              )}
            </p>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label justify-start gap-3">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text text-success">
                accept terms & conditions
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success">Submit</button>
          </div>

          <div className="form-control mt-6">
            <p className="text-success">
              Already have an account?{" "}
              <Link to="/signin" className="text-info">
                Sign in
              </Link>
            </p>
          </div>
        </form>
        <div className="divider text-success uppercase before:bg-slate-50 after:bg-slate-50">Sign up with</div>
        <SocialSignIn />
      </div>
    </div>
  );
};

export default SignUp;
