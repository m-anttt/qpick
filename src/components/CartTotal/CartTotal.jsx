import { useContext } from "react";
import { AppContext } from "../App/App";
import "./style.scss";


const CartTotal = ({ setModalActive }) => {
  const { countTotal } = useContext(AppContext);
  
  return (
    <div className="total">
      <div className="total__wrapper">
        <div className="total__row">
          <span>Итого</span>
          <div className="total__summ">₽ {countTotal().toLocaleString()}</div>
        </div>
      </div>
      <button
        href="#"
        className="total__purchase"
        onClick={() => setModalActive(true)}
      >
        Перейти к оформлению
      </button>
    </div>
  );
};

export default CartTotal;
