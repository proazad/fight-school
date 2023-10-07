import Slider from "./Slider";
import { useLocation } from "react-router-dom";
const Banner = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  
  return (
    <div className="text-center ">
      {
        home && <Slider />
      }
    </div>
  );
};

export default Banner;
