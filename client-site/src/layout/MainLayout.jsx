import { Outlet } from "react-router-dom";
import TopBarMenu from "../components/home/topBarMenu/TopBarMenu";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#1a1a1a]">
      <TopBarMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
