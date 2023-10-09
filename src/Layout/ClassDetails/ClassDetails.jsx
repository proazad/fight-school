import { useLoaderData, useParams } from "react-router-dom";

const ClassDetails = () => {
  const { id } = useParams();
  const allClass = useLoaderData();
  const visitedClass = allClass?.find((item) => item.id === parseInt(id));
  const { title, image, instructor, price, description } = visitedClass;
  return (
    <div className="bg-neutral">
      <div className="container mx-auto py-5">
        <div className=" py-5 lg:py-32 px-5 lg:px-32">
          <div className="p-5 border">
            <img
              src={image}
              className="w-full lg:h-[500px] rounded-xl border-spacing-5 border-2"
            />
            <h2 className="text-4xl font-bold text-white py-5">{title}</h2>
            <h3 className="text-2xl font-bold text-white">
              Instructor: {instructor}
            </h3>
            <h4 className="text-xl text-success">Event Pirce: ${price}</h4>
            <h4 className="text-xl text-success">Event Place: Dhaka</h4>
            <p className="py-10 text-justify text-base text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
