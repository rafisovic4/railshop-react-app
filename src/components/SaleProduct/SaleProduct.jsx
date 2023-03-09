import formatMoney from "../../utils/formatMoney";

const saleProduct = ({ saleProducts }) => {
    console.log(saleProducts)
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
              {formatMoney(saleProducts.old_price)}
            </p>
            <p className="one-tovar__price new_price">
              {formatMoney(saleProducts.new_price)}
            </p>
          </div>

          <button className="form-button">В корзину</button>
        </div>
      </div>
    </>
  );
};

export default saleProduct;
