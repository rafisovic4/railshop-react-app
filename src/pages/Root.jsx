import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import useCart from "../hooks/useCart";

export const ModalContext = createContext(null);
export const CartContext = createContext({});

const Root = () => {
  const [modal, setModal] = useState(false);
  const cart = useCart([]);


  const toggleModal = setModal.bind(this, !modal);
  return (
    <CartContext.Provider value={cart}>
      <ModalContext.Provider value={{ modal, toggleModal }}>
        <Header />
        <Outlet />
        <Modal />
      </ModalContext.Provider>
    </CartContext.Provider>
  );
};

export default Root;
