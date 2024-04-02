import { Outlet } from "react-router-dom";
import MainNavigation from "../component/mainnavigation";
import classes from "../pages/Root.module.css";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
