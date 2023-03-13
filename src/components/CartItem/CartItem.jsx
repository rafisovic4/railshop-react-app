import { useContext } from "react";
import { CartContext } from "../../pages/Root";
import formatMoney from "../../utils/formatMoney";

const CartItem = ({ item }) => {
  const { removeCartItemById } = useContext(CartContext);

  return (
    <div className="body-item">
      <div className="body-item__leftside">
        <img
          src={item.preview}
          alt={item.name}
          className="leftside-image"
        />
      </div>
      <div className="body-item__middle">
        <p className="middle-name">{item.name}</p>
        <div className="middle-price">{formatMoney(item.price)} ₽</div>
      </div>
      <div className="body-item__rightside">
        <button onClick={removeCartItemById.bind(this, item.id)} className="delete-button">X</button>
      </div>
    </div>
  );
};

export default CartItem;
