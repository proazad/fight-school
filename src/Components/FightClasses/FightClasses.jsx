import ClassSlider from "./ClassSlider";
const Classes = () => {
  return (
    <div className="bg-neutral">
      <div className="w-8/12  mx-auto py-16 text-white text-center">
        <h2 className="text-4xl underline">Our classes</h2>
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
