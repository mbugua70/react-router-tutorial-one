import MainNavigation from "../component/mainnavigation";
import classes from "./errorpage.module.css";
const Errorpage = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.errorpage}>
        <h4 className={classes.heading}>404</h4>
        <p>An Error occured</p>
        <p>We could not find the page</p>
      </main>
    </>
  );
};

export default Errorpage;
