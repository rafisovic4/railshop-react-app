import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const ModalContext = createContext(null);

const Root = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = setModal.bind(this, !modal);
  return (
    <ModalContext.Provider value={{ modal, toggleModal }}>
      <Header />
      <Outlet />
    </ModalContext.Provider>
  );
};

export default Root;
