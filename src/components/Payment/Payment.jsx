import { useContext } from "react";
import { AppContext } from "../App/App";
import Logo from "../Logo/Logo";
import disableLink from "../../utils/navLinks";
import "./style.scss";

const Payment = () => {
  const { countTotal } = useContext(AppContext);

  return (
    <div className="modal__content">
      <Logo />
      <h4>Оплатить покупку</h4>
      <form className="payment">
        <input
          className="payment__input"
          type="text"
          placeholder="ФИО"
          required
        />
        <input
          className="payment__input"
          type="phone"
          placeholder="Телефон"
          required
        />
        <input className="payment__input" type="email" placeholder="email" />
        <span>Сумма: {countTotal().toLocaleString()} ₽</span>
        <button type='submit'
          className="payment__link"
        >
          Перейти к оформлению
        </button>
      </form>
    </div>
  );
};

export default Payment;
