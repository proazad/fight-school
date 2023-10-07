import { useLoaderData } from "react-router-dom";
const Instructors = () => {
  const allInstructors = useLoaderData();
  return (
    <div>
      <div className="bg-neutral text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold py-10">All Instructors</h2>
          <ul className="grid grid-cols-4 gap-5 pb-10">
            {allInstructors.map((item) => (
              <li
                key={item.id}
                className="p-5 bg-base-200 flex flex-col justify-center items-center"
              >
                <img src={item.img} className="rounded-full h-44 w-44" alt="" />
                <h3 className="text-2xl font-bold text-neutral py-2">
                  {item.name}
                </h3>
                <p className="text-xl text-neutral">
                  Designation: {item.designation}
                </p>
                <p className="text-xl text-success">Expart: {item.course}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
