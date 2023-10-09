import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Root = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
