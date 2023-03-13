import { useContext, useRef } from "react";
import { CartContext, ModalContext } from "../../pages/Root";
import cartTotal from "../../utils/cartTotal";
import formatMoney from "../../utils/formatMoney";
import CartItem from "../CartItem/CartItem";

const Modal = () => {
  const { modal, toggleModal } = useContext(ModalContext);
  const cart = useContext(CartContext);

  const overlayRef = useRef();
  const total = cartTotal(cart.cartItems);

  const close = (event) => {
    if (event.target === overlayRef.current) {
      toggleModal();
    }
  };
  return (
    <section
      onClick={(e) => close(e)}
      ref={overlayRef}
      className={`overlay ${modal ? "active" : ""}`}
    >
      <div className="modal">
        <div className="modal-content">
          <div className="modal-content__header">Корзина</div>
          <div className="modal-content__body">
              {
                cart.cartItems.map((item) => {
                  return <CartItem key={item.id} item={item} />
                })
              }

          </div>
          <div className="modal-content__footer">
            <div className="prices-result">
              <p className="price-text">Итого:</p>
              <p className="price-total">{formatMoney(total)} ₽</p>
            </div>
            <div className="content-footer__button">
              <button className="order-button">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
