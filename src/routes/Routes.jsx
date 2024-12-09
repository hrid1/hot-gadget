import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Gadgets from "../components/Gadgets";
import GadgetInfo from "../pages/GadgetInfo/GadgetInfo";
import AboutUs from "../pages/AboutUs/AboutUs";
import Statistics from "../pages/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../products.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "category/:id",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/gadget/:id",
        element: <GadgetInfo></GadgetInfo>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);
