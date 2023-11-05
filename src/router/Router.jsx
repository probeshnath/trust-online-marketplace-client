import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><MainLayout></MainLayout></Layout> ,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
  ])
  export default router;