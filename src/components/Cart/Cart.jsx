import { useState } from "react";
import CartTotal from "../CartTotal/CartTotal";
import CartCards from "../CartCards/CartCards";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Payment from "../Payment/Payment";
import "./style.scss";

const Cart = () => {
  const [modalActive, setModalActive] = useState(false);
  
  return (
    <div className="container-big">
      <Header />
      <div className="container">
      <section className="cart">
        <h2 className="section-title cart__title">Корзина</h2>
        <div className="cart__wrapper">
          <CartCards />
          <CartTotal setModalActive={setModalActive} />
        </div>
      </section>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        children={<Payment />}
      />
      <Footer />
      </div>
    </div>
  );
};

export default Cart;
