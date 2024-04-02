import { NavLink } from "react-router-dom";
import classes from "./mainnavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          {/* <p>logo</p> */}
          <ul className={classes.list}>
            <li>
              {/* <Link to="/">Home</Link> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* <Link to="/products">Products</Link> */}
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                // this will help to avoid the previous routes from still inheriting the active classes
                end
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
