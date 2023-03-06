import Catalog from "../components/Catalog/Catalog";
import SaleCatalog from "../components/SaleCatalog/SaleCatalog";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Catalog />
      <SaleCatalog />
    </>
  );
};

export default HomePage;
