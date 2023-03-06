import formatMoney from "../../utils/formatMoney";

const Product = ({ product }) => {
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
          <p className="one-tovar__pric">{formatMoney(product.price)}</p>
          <button className="form-button">В корзину</button>
        </div>
      </div>
    </>
  );
};

export default Product;
