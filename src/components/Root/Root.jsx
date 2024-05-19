import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-8">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
