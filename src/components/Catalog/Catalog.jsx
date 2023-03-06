import { useState } from "react";
import PRODUCTS from "../../data/PRODUCTS";
import Product from "../Product/Product";
import Search from "../Search/Search";

const Catalog = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [query, setQuery] = useState("");

  const filterProducts = products.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  const onChangeQuery = (event) => {
    setQuery(event.target.value.toLowerCase());
  };
  

  return (
    <section className="catalog">
      <div className="osnova__catalog">
        <div className="header-catalog">
          <h1 className="section--title">Каталог</h1>
          <Search query={query} onChangeQuery={onChangeQuery} />
        </div>
        <div className="footer-catalog">
          {filterProducts.length > 0 ? (
            filterProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })
          ) : (
            <h2 className="empty">
              По вашему запросы "{query}" ничего не найдено!
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
