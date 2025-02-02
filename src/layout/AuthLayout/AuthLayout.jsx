import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/";

function AuthLayout() {
  return (
    <>
      <Navbar />

      <main className="align-elements">
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout;
