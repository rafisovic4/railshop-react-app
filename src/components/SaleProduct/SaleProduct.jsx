import { useContext } from "react";
import { CartContext } from "../../pages/Root";
import calculatePercent from "../../utils/calculatePercent";
import formatMoney from "../../utils/formatMoney";
import Product from "../Product/Product";

const saleProduct = ({ saleProducts }) => {

  const old_price = saleProducts.old_price;
  const sale_count = saleProducts.sale;
  const totalPercent = calculatePercent(old_price, sale_count);

  const {addToCart} = useContext(CartContext);
  return (
    <>
      <div className="one-tovar">
        <div className="header-one__item">
          <img
            src={saleProducts.preview}
            alt={saleProducts.name}
            className="one-tovar__image"
          />
          <div className="sale_count">SALE -{saleProducts.sale}</div>
        </div>
        <div className="footer-one__item">
          <h2 className="one-tovar__title">{saleProducts.name}</h2>
          <div className="prices">
            <p className="one-tovar__price old_price">
              {formatMoney(saleProducts.old_price)} ₽
            </p>
            <p className="one-tovar__price new_price">
              {formatMoney(totalPercent)} ₽
            </p>
          </div>
          <button onClick={addToCart.bind(this, saleProduct)} className="form-button">Подробнее</button>
        </div>
      </div>
    </>
  );
};

export default saleProduct;
