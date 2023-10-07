import { createBrowserRouter } from "react-router-dom";
import Error404 from "../Layout/404/Error404";
import SingIn from "../Layout/Auth/SignIn";
import SignUp from "../Layout/Auth/SignUp";
import Home from "../Layout/Home/Home";
import Root from "../Layout/Root/Root";
import ClassDetails from "../Layout/ClassDetails/ClassDetails";

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
        path: "/classes/:id",
        element: <ClassDetails />,
      },
      {
        path: "/classes",
        element: <SingIn />,
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
