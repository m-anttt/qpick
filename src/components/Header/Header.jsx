import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App/App";
import Logo from "../Logo/Logo";
import "./style.scss";

const Header = () => {
  const { favourites, cart } = useContext(AppContext);

  return (
    <header className="header">
      <div className="header__row">
        <Logo />
        <div className="header__nav">
          <div className="header__icon header__favs">
            <Link href="/favourites">
              <img src="./../images/icons/favourites.svg" alt="favourites-icon" />
            </Link>
            <div className="header__count">{favourites}</div>
          </div>
          <div className="header__icon header__cart">
            <Link to="/cart">
              <img src="./images/icons/cart.svg" alt="cart-icon" />
            </Link>
            <div className="header__count">{cart}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
