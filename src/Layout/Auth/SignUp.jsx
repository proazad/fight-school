import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import passwordValidation from "../../Hook/Hook";
import bg from "../../assets/background-1.png";
import { AuthContext } from "./AuthProvider/AuthProvider";
import SocialSignIn from "./SocialSignIn";
const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, userProfileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const showPassword = (e) => {
    setShowPass(e);
  };

  const handleUserSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name").trim();
    const photo = form.get("photoUrl").trim();
    const email = form.get("email").trim();
    const password = form.get("password").trim();
    const confirmPassword = form.get("confirmPassword").trim();
    const checkboxs = form.get("terms");
    console.log(name, photo, email, password, confirmPassword, checkboxs);

    const passError = passwordValidation(password, confirmPassword);

    if (!checkboxs) {
      toast.error("You must agree to the terms and conditions");
      return;
    } else if (!passError) {
      return;
    } else {
      createUser(email, password)
        .then(() => {
          toast.success("User created successfully");
          userProfileUpdate(name, photo);
          navigate("/");
        })
        .catch(() => {
          toast.error("User with this email already exist");
        });
    }
  };
  return (
    <div className="bg-neutral py-10">
      <div
        style={{ background: `url(${bg})` }}
        className="container rounded-xl p-0 lg:p-10 lg:w-5/12 mx-auto"
      >
        <form onSubmit={handleUserSignUp} className="card-body">
        <h3 className="text-2xl lg:text-4xl text-white">Please Registration</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-success">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
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
              name="photoUrl"
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
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-success">Confirm Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Confrim password"
              name="confirmPassword"
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
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-success"
                required
              />
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
        <div className="divider text-success uppercase before:bg-slate-50 after:bg-slate-50">
          Sign up with
        </div>
        <SocialSignIn />
      </div>
    </div>
  );
};

export default SignUp;
