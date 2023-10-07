import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-neutral">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
        <div className="w-10/12 mx-auto">
          <h2 className="text-3xl text-white text-center">Opening hours</h2>
          <div className="flex gap-16">
            <div className="mt-5 flex gap-5 items-center">
              <div className="bg-gray-700 p-3 rounded-full">
                <AiOutlineClockCircle className="text-success text-5xl" />
              </div>
              <div>
                <h2 className="text-white text-xl font-bold">Mon-Thu</h2>
                <p className="text-gray-400 text-base ">8:00am - 9:00pm</p>
              </div>
            </div>
            <div className="mt-5 flex gap-5 items-center">
              <div className="bg-gray-700 p-3 rounded-full">
                <AiOutlineClockCircle className="text-success text-5xl" />
              </div>
              <div>
                <h2 className="text-white text-xl font-bold">Fri-Sun</h2>
                <p className="text-gray-400 text-base ">11:00am - 5:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl text-white text-center">Connect With us</h2>
          <div className="flex justify-center mt-7 gap-5">
            <FaFacebookF className="text-success text-3xl hover:text-blue-700" />
            <FaInstagram className="text-success text-3xl hover:text-red-500" />
            <FaTwitter className="text-success text-3xl hover:text-blue-500" />
            <FaLinkedinIn className="text-success text-3xl hover:text-blue-500" />
            <FaDribbble className="text-success text-3xl" />
            <FaSnapchat className="text-success text-3xl hover:text-yellow-300" />
            <FaYoutube className="text-success text-3xl hover:text-red-700" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-start pb-5">
        <div>
          <p className="text-white">
            &copy; FightSchool 2016. All rights reserved.
          </p>
          <p className="text-gray-300">Website design by Azad Hossain</p>
        </div>
        <div className="flex-1 flex justify-end gap-5 text-white">
            <Link to="" className="hover:text-success">Home</Link>
            <Link to="" className="hover:text-success">About</Link>
            <Link to="" className="hover:text-success">Cotact</Link>
            <Link to="" className="hover:text-success">Privacy</Link>
            <Link to="" className="hover:text-success">Terms</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
