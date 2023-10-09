import { createBrowserRouter } from "react-router-dom";
import Error404 from "../Layout/404/Error404";
import AllClasses from "../Layout/AllClasses/AllClasses";
import SingIn from "../Layout/Auth/SignIn";
import SignUp from "../Layout/Auth/SignUp";
import ForgotPassword from "../Layout/Auth/forgotPassword";
import ClassDetails from "../Layout/ClassDetails/ClassDetails";
import Home from "../Layout/Home/Home";
import Instructors from "../Layout/Instructors/Instructors";
import Root from "../Layout/Root/Root";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/class/:id",
        element: (
          <PrivateRoute>
            <ClassDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../class.json"),
      },
      {
        path: "/classes",
        element: <PrivateRoute><AllClasses /></PrivateRoute>,
        loader: () => fetch("./class.json"),
      },
      {
        path: "/instructors",
        element: <Instructors />,
        loader: () => fetch("./instructor.json"),
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/forgotPassowrd",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default Router;
