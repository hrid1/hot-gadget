import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Home from "../../pages/Home/Home";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="font-sora">
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-400px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>

      <Toaster />
    </div>
  );
};

export default RootLayout;
// className=" h-[calc(100vh-368px)]"