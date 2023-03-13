import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../pages/Root";
import formatMoney from "../../utils/formatMoney";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="one-tovar">
        <div className="header-one__item">
          <img
            src={product.preview}
            alt={product.name}
            className="one-tovar__image"
          />
        </div>
        <div className="footer-one__item">
          <h2 className="one-tovar__title">{product.name}</h2>
          <p className="one-tovar__price">{formatMoney(product.price)} ₽</p>
          <div className="buttons-tovar">
            <button
              className="form-button"
              onClick={addToCart.bind(this, product)}
            >
              В корзину
            </button>
            <NavLink to={`/tovar/${product.id}`}><button
              className="form-button active"
              onClick={addToCart.bind(this, product)}
            >
              Подробнее
            </button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
