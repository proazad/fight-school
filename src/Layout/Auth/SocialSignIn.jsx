import { FcGoogle } from "react-icons/fc";
import { FaFacebook,FaGithub,FaTwitter } from "react-icons/fa";
const SocialSignIn = () => {
  return (
    <div className="flex justify-center gap-5">
      <FcGoogle className="text-4xl"/>
      <FaFacebook className="text-4xl text-blue-800"/>
      <FaGithub className="text-4xl text-info"/>
      <FaTwitter className="text-4xl text-info"/>
    </div>
  );
};

export default SocialSignIn;
