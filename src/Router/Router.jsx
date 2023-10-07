import { createBrowserRouter } from "react-router-dom";
import Error404 from "../Layout/404/Error404";
import Root from "../Layout/Root/Root";
import Home from "../Layout/Home/Home";
import SingIn from "../Layout/Auth/SignIn";
import SignUp from "../Layout/Auth/SignUp";

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
