import logotype from "../../assets/icons/logotype.png";
import basketIcon from "../../assets/icons/basket_icon.svg";
import profileIcon from "../../assets/icons/profile_icon.svg";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="osnova__header">
                <div className="logotype-header">
                    <NavLink to="/">
                        <img src={logotype} alt={logotype} className="logotype-image" />
                    </NavLink>
                </div>
                <nav className="menu-navigation">
                    <NavLink to="/"><li className="li-menu-navigation">Главная</li></NavLink>
                    <NavLink to="/catalog"><li className="li-menu-navigation">Каталог</li></NavLink>
                    <NavLink to="/profile"><li className="li-menu-navigation">Профиль</li></NavLink>
                </nav>
                <div className="buttons-header">
                    <button href="#" className="basket-button">
                        <img src={basketIcon} alt={basketIcon} className="basket-button-image" />
                    </button>
                    <button href="#" className="profile-button">
                        <img src={profileIcon} alt={profileIcon} className="basket-button-image" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;