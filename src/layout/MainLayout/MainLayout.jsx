// components
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// react-router-dom
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar */}
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
