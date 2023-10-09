import { useLoaderData, useParams } from "react-router-dom";

const ClassDetails = () => {
  const { id } = useParams();
  const allClass = useLoaderData();
  const visitedClass = allClass?.find((item) => item.id === parseInt(id));
  const {
    title,
    image,
    instructor,
    price,
    description,
    place,
    seat,
    remainSeat,
  } = visitedClass;
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
              Instructor: <span className="text-success">{instructor}</span>
            </h3>
            <div className="flex justify-between">
              <div>
                <h4 className="text-xl text-white">Event Pirce: <span className="text-success">${price}</span></h4>
                <h4 className="text-xl text-white">Event Place: <span className="text-success">{place}</span></h4>
                <p className="text-white">Total Seat: <span className="text-success">{seat}</span></p>
                <p className="text-white">Remaining Seat: <span className="text-success">{remainSeat}</span></p>
              </div>
              <div>
                <button className="btn my-8 btn-success">Book Now</button>
              </div>
            </div>

            <p className="py-10 text-justify text-base text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
