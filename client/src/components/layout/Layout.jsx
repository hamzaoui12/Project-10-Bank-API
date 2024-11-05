import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="w-full overflow-y-hidden">
      <NavBar />
      <div className="h-[82vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
