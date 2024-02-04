import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import { NavLayout } from "./layouts/NavLayout";
import "./styles/dist/styles.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/all-products", element: <AllProducts /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/cart", element: <Cart /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
]);
