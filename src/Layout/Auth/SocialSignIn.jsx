import { useContext } from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthProvider/AuthProvider";
const SocialSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Successfuly Sigin !");
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Something went wrong Please again latter!");
      });
  };
  return (
    <div className="flex justify-center gap-5">
      <FcGoogle onClick={handleGoogleLogin} className="text-4xl cursor-pointer" />
      <FaFacebook className="text-4xl text-blue-800 cursor-pointer" />
      <FaGithub className="text-4xl text-info cursor-pointer" />
      <FaTwitter className="text-4xl text-info cursor-pointer" />
    </div>
  );
};

export default SocialSignIn;
