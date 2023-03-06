import { useState } from "react";
import SLIDES from "../../data/SLIDES";
import SlideItem from "./SlideItem/SlideItem";
import prevArrow from "../../assets/icons/prevArrow.png";
import nextArrow from "../../assets/icons/nextArrow.png";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const [items, setItems] = useState(SLIDES);
  const [CurrentIndex, setCurrentIndex] = useState(0);

  const nextButton = setCurrentIndex.bind(
    this,
    CurrentIndex >= items.lehgt - 1 ? 0 : CurrentIndex + 1
  );
  const prevButton = setCurrentIndex.bind(
    this,
    CurrentIndex <= 0 ? items.length - 1 : CurrentIndex - 1
  );

  return (
    <section className="banner">
      <SlideItem item={items[CurrentIndex]} />
      <div className="control">
        {CurrentIndex <= 0 || (
          <button onClick={prevButton} className="prevButton">
            <img src={prevArrow} alt="prevButton" />
          </button>
        )}
        {CurrentIndex >= items.length - 1 || (
          <button onClick={nextButton} className="nextButton">
            <img src={nextArrow} alt="nextButton" />
          </button>
        )}
      </div>
      <div className="osnova__banner">
        <div className="banner-information">
          <h1 className="banner__title">
            ТОЛЬКО У НАС ЛИЦЕНЗИОННЫЕ КЛЮЧИ <br /> ПО{" "}
            <span className="page-span"> САМЫМ НИЗКИМ ЦЕНАМ!</span>
          </h1>
          <NavLink to="/catalog">
            <button className="banner-button">Купить</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Slider;
