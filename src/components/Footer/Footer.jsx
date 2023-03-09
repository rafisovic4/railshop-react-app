import { NavLink } from "react-router-dom";
import logotype from "../../assets/icons/logotype.png";



const Footer = () => {
  return (
    <footer>
      <div className="osnova__footer">
        <div className="logotype-header">
          <NavLink to="/">
            <img src={logotype} alt={logotype} className="logotype-image" />
          </NavLink>
        </div>
        <div className="public-offerta"><NavLink to="/public_offerta">Публичная оферта</NavLink></div>
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
      </div>
    </footer>
  );
};

export default Footer;
