import { BsClock } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { RiFirstAidKitLine, RiTrophyLine } from "react-icons/ri";
import bg1 from "../../assets/background-1.png";
const AboutPart2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="bg-cover bg-left-top p-5 lg:p-16 text-center lg:text-left text-white"
        style={{ background: `url(${bg1})` }}
      >
        <h2  className="text-3xl  underline mb-5 font-bold uppercase">About Our Service</h2>
        <p className="text-base lg:text-xl italic ">
          Fight School Gym Center offers a holistic approach to martial arts,
          blending traditional techniques with modern fitness.
        </p>
        <br />
        <p className="text-base lg:text-xl">
          Expert instructors provide personalized training, fostering
          discipline, confidence, and physical prowess. State-of-the-art
          facilities and a supportive community create an inspiring environment
          for students of all levels, ensuring comprehensive martial arts
          education and overall well-being.
        </p>
        <button className="btn btn-success btn-outline mt-5">Read More</button>
      </div>
      <div className="grid grid-cols-2">
        <div  className="flex flex-col justify-center text-center items-center text-neutral p-3 lg:p-10 border-r border-b">
          <MdGroups2 className="text-4xl lg:text-7xl text-success" />
          <h4 className="text-base lg:text-xl font-semibold">OPEN DOOR POLICY</h4>
          <p>
            Everybody is welcome into our gym, no matter what age or gender.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center items-center text-neutral p-3 lg:p-10 border-b">
          <RiFirstAidKitLine className="text-3xl lg:text-7xl text-success" />
          <h4 className="text-base lg:text-xl font-semibold">FULLY INSURED</h4>
          <p>All members of our gym are fully covered under our insurance.</p>
        </div>

        <div className="flex flex-col justify-center text-center items-center text-neutral p-3 lg:p-10 border-r border-b">
          <RiTrophyLine className="text-3xl lg:text-7xl text-success" />
          <h4 className="text-base lg:text-xl font-semibold">TRAINED CHAMPS</h4>
          <p>Over the years we’ve nurtured and trained many champions.</p>
        </div>

        <div className="flex flex-col justify-center text-center items-center text-neutral p-3 lg:p-10 border-b">
          <BsClock className="text-3xl lg:text-7xl text-success" />
          <h4 className="text-base lg:text-xl font-semibold">MULTIPLE CLASSES</h4>
          <p>We schedule multiple classes at various times in the week.</p>
        </div>

      </div>
    </div>
  );
};

export default AboutPart2;
