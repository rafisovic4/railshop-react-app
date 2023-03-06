import { useState } from "react";
import SALE_PRODUCTS from "../../data/SALE_PRODUCTS";
import SaleProduct from "../SaleProduct/SaleProduct";

const SaleCatalog = () => {
    const [saleProducts, setSaleProducts] = useState(SALE_PRODUCTS);
    const [query, setQuery] = useState("");

    const filterProducts = saleProducts.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

    return (
        <section className="catalog">
        <div className="osnova__catalog">
          <div className="header-catalog">
            <h1 className="section--title">Акционные товары</h1>
          </div>
          <div className="footer-catalog">
            {filterProducts.length > 0 ? (
              filterProducts.map((saleProducts) => {
                return <SaleProduct key={saleProducts.id} saleProducts={saleProducts} />;
              })
            ) : (
              <h2 className="empty">
                По вашему запросы "{query}" ничего не найдено!
              </h2>
            )}
          </div>
        </div>
      </section>
    )
}

export default SaleCatalog;