import img from "../../assets/home-img-1.png";
import img2 from "../../assets/home-img-2.png";
import img3 from "../../assets/home-img-3.png";
import img4 from "../../assets/home-img-4.png";
const AboutPart1 = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="about-card">
        <h2 className="">High tech Gym</h2>
        <div className="img-container">
          <div className="overlay-card">
            <p>
              Fight school&apos;s high-tech gym boasts cutting-edge equipment,
              virtual training, and personalized workouts.
            </p>
            <button className="btn btn-neutral btn-sm btn-outline mt-5">
              More Information
            </button>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="about-card">
        <h2 className="">Introductional Videos</h2>
        <div className="img-container">
          <div className="overlay-card">
            <p>
              Fight school&apos;s friendly instructors empower students,
              instilling confidence, respect, and discipline while nurturing
              camaraderie.
            </p>
            <button className="btn btn-sm btn-neutral btn-outline mt-5">
              More Information
            </button>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="about-card">
        <h2 className="">Friendly Instructors</h2>
        <div className="img-container">
          <div className="overlay-card">
            <p>
              Fight school instructional videos provide essential techniques,
              enhancing skills, discipline, and confidence for aspiring martial
              artists.
            </p>
            <button className="btn btn-sm btn-neutral btn-outline mt-5">
              More Information
            </button>
          </div>
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="about-card">
        <h2 className="">Happy Students</h2>
        <div className="img-container">
          <div className="overlay-card">
            <p>
              Fight school&apos;s, happy students sweat, achieve goals, and form
              lasting friendships, fostering well-being and confidence.
            </p>
            <button className="btn btn-sm btn-neutral btn-outline mt-5">
              More Information
            </button>
          </div>
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPart1;
