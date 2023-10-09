import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Layout/Auth/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Successfully Sign out");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/gallary">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user ? "": (
        <li>
          <NavLink to="/signin">SignIn</NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="bg-neutral text-neutral-content">
      <div className="container  mx-auto navbar">
        <div className="navbar-start w-full lg:w-auto  justify-between flex-row-reverse">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 right-0 z-[999] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
            >
              {navlinks}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold uppercase">
            Fitness<span className="text-success">Events</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex  ml-auto">
          <ul className="menu menu-horizontal md:flex-nowrap uppercase px-1">{navlinks}</ul>
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] right-0 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </p>
                </li>
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/">Settings</Link>
                </li>
                <li>
                  <button onClick={handleUserSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
