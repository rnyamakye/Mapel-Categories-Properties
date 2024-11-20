import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertiesPageTwo from "./pages/PropertiesPageTwo";
import Categories from "./pages/Categories";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import "./App.css";
import "./fonts.css";
import { PropertyDetails } from "./pages/PropertyDetails";
import PropertiesByCategories from "./pages/PropertiesByCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/properties-page-2",
    element: <PropertiesPageTwo />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetails />,
  },
  {
    path: "/categories/:category", // Route for categories
    element: <PropertiesByCategories />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
