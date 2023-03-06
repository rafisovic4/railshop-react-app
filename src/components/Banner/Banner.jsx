import sliderImage from "../../assets/image/slider-image.png";

const Banner = () => {
  return (
    <section className="banner">
      <img src={sliderImage} alt={sliderImage} className="slider-image-back" />
      <div className="osnova__banner"></div>
    </section>
  );
};

export default Banner;
