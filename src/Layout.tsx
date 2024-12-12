import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
