import { Fragment } from "react";
import mealsImage from "../../assets/meals2.jpg";
import classes from "./Header.module.css";
import HeadercartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>🌸QuynhNg🌸</h1>
        <HeadercartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A sushi dish!" />
      </div>
    </Fragment>
  );
};
export default Header;
