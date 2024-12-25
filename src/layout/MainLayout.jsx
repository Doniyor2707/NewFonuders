// navbar menu
import Navbar from "../components/Navbar/Navbar";

// react-router-dom
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* footer */}
    </>
  );
}

export default MainLayout;
