const saleProduct = ({ saleproduct }) => {
    console.log(saleproduct)
  return (
    <>
      <div className="one-tovar">
        <div className="header-one__item">
          <img
            src={saleproduct.preview}
            alt={saleproduct.name}
            className="one-tovar__image"
          />
          <div className="sale_count">{saleproduct.sale}</div>
        </div>
        <div className="footer-one__item">
          <h2 className="one-tovar__title">{saleproduct.name}</h2>
          <div className="prices">
            <p className="one-tovar__price old_price">
              {formatMoney(saleproduct.old_price)}
            </p>
            <p className="one-tovar__price new_price">
              {formatMoney(saleproduct.new_price)}
            </p>
          </div>

          <button className="form-button">В корзину</button>
        </div>
      </div>
    </>
  );
};

export default saleProduct;
