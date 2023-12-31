import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../assets/background-3.png";
import { AuthContext } from "./AuthProvider/AuthProvider";
import SocialSignIn from "./SocialSignIn";
import { toast } from "react-toastify";
const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const { userSignWithPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const showPassword = (e) => {
    setShowPass(e);
  };
  const handleUserSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    userSignWithPassword(email, password)
      .then(() => {
        toast.success("Successfully Signed in");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Some went wrong! Invalid Email or Password!");
      });
  };
  return (
    <div className="bg-neutral py-10">
      <div
        style={{ background: `url(${bg})` }}
        className="container rounded-lg p-0 lg:p-10 lg:w-5/12 mx-auto"
      >
        <form onSubmit={handleUserSignIn} className="card-body">
        <h3 className="text-2xl lg:text-4xl text-white">Please Sign in</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-success">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
            <label className="label">
              <Link
                to="/forgotPassowrd"
                className="label-text-alt text-success link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success">Login</button>
          </div>
          <div className="form-control mt-6">
            <p className="text-success">
              Don&apos;t have account ?{" "}
              <Link to="/signup" className="text-info link">
                Sign up
              </Link>
            </p>
          </div>
        </form>
        <div className="divider text-success uppercase before:bg-slate-50 after:bg-slate-50">
          Sign in with
        </div>
        <SocialSignIn />
      </div>
    </div>
  );
};

export default SignIn;
