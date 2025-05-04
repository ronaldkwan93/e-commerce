import { LuCoffee } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import classes from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div >
        <Link to="menu" className={classes.nav__header}>
          <LuCoffee />
          <h1>Café on Click!</h1>
        </Link>
      </div>
      <div>
        <ul className={classes.nav__links}>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className={classes.nav__cart}>
        <Link to="/cart">
          <LuShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
