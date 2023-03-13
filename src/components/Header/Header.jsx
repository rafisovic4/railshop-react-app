import logotype from "../../assets/icons/logotype.png";
import basketIcon from "../../assets/icons/basket_icon.svg";
import profileIcon from "../../assets/icons/profile_icon.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../../pages/Root";

const Header = () => {
  const { toggleModal } = useContext(ModalContext);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <header className={isHomePage ? "" : "active"}>
      <div className="osnova__header">
        <div className="logotype-header">
          <NavLink to="/">
            <img src={logotype} alt={logotype} className="logotype-image" />
          </NavLink>
        </div>
        <nav className="menu-navigation">
          <NavLink to="/">
            <li className="li-menu-navigation">Главная</li>
          </NavLink>
          <NavLink to="/catalog">
            <li className="li-menu-navigation">Каталог</li>
          </NavLink>
          <NavLink to="/profile">
            <li className="li-menu-navigation">Профиль</li>
          </NavLink>
        </nav>
        <div className="buttons-header">
          <button onClick={toggleModal} className="basket-button">
            <img
              src={basketIcon}
              alt={basketIcon}
              className="basket-button-image"
            />
          </button>
          <NavLink to="/profile">
            <button href="#" className="profile-button">
              <img
                src={profileIcon}
                alt={profileIcon}
                className="basket-button-image"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
