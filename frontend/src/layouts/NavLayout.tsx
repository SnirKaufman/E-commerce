import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
