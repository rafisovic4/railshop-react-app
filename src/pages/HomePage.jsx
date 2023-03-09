import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import SaleCatalog from "../components/SaleCatalog/SaleCatalog";
import SearchForm from "../components/SearchForm/SearchForm";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Catalog />
      <SaleCatalog />
      <SearchForm />
      <Footer />
    </>
  );
};

export default HomePage;
