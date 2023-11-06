import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import PrivateRoute from "./PrivateRoute";
import MyPostJobUpdate from "../pages/MyPostJobUpdate";
import JobDetails from "../pages/JobDetails";
import MyBids from "../pages/MyBits";
import BidRequests from "../pages/BidRequests";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><MainLayout></MainLayout></Layout> ,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: ()=> fetch(`http://localhost:5000/jobs`)
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
          element: <PrivateRoute><AddJobs /></PrivateRoute> 
        }
        ,
        {
          path:"/mypostedjobs",
          element: <PrivateRoute><MyPostedJobs /></PrivateRoute> 
        },
        {
          path:"/mybids",
          element: <PrivateRoute> <MyBids /> </PrivateRoute> 
        },
        {
          path:"/bidrequests",
          element: <PrivateRoute> <BidRequests /> </PrivateRoute> 
        },
        {
          path:"/update/:id",
          element: <PrivateRoute> <MyPostJobUpdate /> </PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:"/jobs/:id",
          element: <PrivateRoute> <JobDetails /> </PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
      ]
    },
  ])
  export default router;