import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs";

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
          path:"/add_jobs",
          element: <AddJobs />
        }
        ,
        {
          path:"/my-posted-jobs",
          element: <MyPostedJobs />
        }
      ]
    },
  ])
  export default router;