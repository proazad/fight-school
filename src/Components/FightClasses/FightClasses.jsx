import ClassSlider from "./ClassSlider";
const Classes = () => {
  return (
    <div className="bg-neutral py-10">
      <div className="container lg:w-8/12  mx-auto px-2 lg:px-0 py-5 lg:py-16 text-white text-center">
        <h2 className="text-4xl font-bold underline uppercase">Our Fitnes Event</h2>
        <p className="text-base mt-5">
          Fight school classes combine expert training with a supportive
          atmosphere, promoting discipline, fitness, and camaraderie. Students
          thrive in a dynamic learning environment, achieving martial arts
          excellence and personal growth.
        </p>
      </div>
      <ClassSlider />
    </div>
  );
};

export default Classes;
