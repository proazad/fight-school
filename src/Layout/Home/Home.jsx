import AboutUs from "../../Components/AboutUs/AboutUs";
import Blog from "../../Components/Blog/Blog";
import Feedback from "../../Components/Feedback/Feedback";
import FightClasses from "../../Components/FightClasses/FightClasses";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <FightClasses />
      <Blog />
      <Feedback />
    </div>
  );
};

export default Home;
