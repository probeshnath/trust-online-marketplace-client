import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><MainLayout></MainLayout></Layout> ,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
  ])
  export default router;