import { useContext, useRef } from "react";
import { ModalContext } from "../../pages/Root";

const Modal = () => {
  const { modal, toggleModal } = useContext(ModalContext);

  const overlayRef = useRef();

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
            <>
            <div className="body-item">
              <div className="body-item__leftside">
                <img
                  src="https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6"
                  alt=""
                  className="leftside-image"
                />
              </div>
              <div className="body-item__middle">
                <p className="middle-name">Spider man miles morales</p>
                <div className="middle-price">45 000 ₽</div>
              </div>
              <div className="body-item__rightside">
                <button className="delete-button">X</button>
              </div>
            </div>
            <div className="body-item">
              <div className="body-item__leftside">
                <img
                  src="https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6"
                  alt=""
                  className="leftside-image"
                />
              </div>
              <div className="body-item__middle">
                <p className="middle-name">Spider man miles morales</p>
                <div className="middle-price">45 000 ₽</div>
              </div>
              <div className="body-item__rightside">
                <button className="delete-button">X</button>
              </div>
            </div>
            <div className="body-item">
              <div className="body-item__leftside">
                <img
                  src="https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6"
                  alt=""
                  className="leftside-image"
                />
              </div>
              <div className="body-item__middle">
                <p className="middle-name">Spider man miles morales</p>
                <div className="middle-price">45 000 ₽</div>
              </div>
              <div className="body-item__rightside">
                <button className="delete-button">X</button>
              </div>
            </div>
            

            </>

          </div>
          <div className="modal-content__footer">
            <div className="prices-result">
              <p className="price-text">Итого:</p>
              <p className="price-total">45 000 ₽</p>
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
