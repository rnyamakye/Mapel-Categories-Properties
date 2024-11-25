import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import { PropertyDetails } from "./pages/PropertyDetails";
import PropertiesByCategories from "./pages/PropertiesByCategories";
import Categories from "./pages/Categories";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import { Contact } from "./pages/Contact";
import "./App.css";
import "./fonts.css";

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
    path: "/properties/:pageNumber?",
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
    path: "/property/:id",
    element: <PropertyDetails />,
  },
  {
    path: "/categories/:category", // Route for categories
    element: <PropertiesByCategories />,
  },
  {
    path: "/contact", // Route for categories
    element: <Contact />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
