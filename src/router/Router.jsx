import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><MainLayout></MainLayout></Layout> ,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path:"/register",
          element: <Register />
        },
        {
          path:"/add-jobs",
          element: <AddJobs />
        }
      ]
    },
  ])
  export default router;