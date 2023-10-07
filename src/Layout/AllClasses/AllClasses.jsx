import { useLoaderData, Link } from "react-router-dom";
const AllClasses = () => {
  const allClass = useLoaderData();

  return (
    <div className="bg-neutral text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold py-10">All Classes</h2>
        <ul className="grid grid-cols-4 gap-5 pb-10">
          {allClass.map((item) => (
            <li key={item.id} className="p-5 bg-base-200">
              <Link to={`/classes/${item.id}`}>
                <img src={item.image} alt="" />
                <h3 className="text-2xl font-bold text-neutral py-2">
                  {item.title}
                </h3>
                <p className="text-xl text-neutral">
                  Instructor: {item.instructor}
                </p>
                <p className="text-xl text-success">Prce: ${item.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllClasses;
