import { useContext } from "react";
import { AppContext } from "../App/App";
import "./style.scss";

const CartCard = ({ data }) => {
  const { addToCart, removeSingleItemFromCart, deleteFromCart } =
    useContext(AppContext);
    
  return (
    <div className="cart-card">
      <div className="cart-card__content">
        <div className="cart-card__product">
          <div className="cart-card__graphics">
            <img
              className="cart-card__image"
              src={`./../images/products/${data.image}.png`}
              alt="product-image"
            />
            <div className="cart-card__controls">
              <button
                className="cart-card__control"
                onClick={() => removeSingleItemFromCart(data.id)}
              >
                <img src="./../images/icons/minus.svg" alt="decrease-amount" />
              </button>
              <span>{data.amount}</span>
              <button
                className="cart-card__control"
                onClick={() => addToCart(data.id)}
              >
                <img src="./../images/icons/plus.svg" alt="increase-amount" />
              </button>
            </div>
          </div>
          <div className="cart-card__description">
            <h3 className="cart-card__title">{data.title}</h3>
            <span className="cart-card__price">
              {data.price.toLocaleString()} ₽
            </span>
          </div>
        </div>
        <div className="cart-card__service">
          <button
            className="cart-card__delete"
            onClick={() => deleteFromCart(data.id)}
          >
            <img
              className="cart-card__delete-icon"
              src="./../images/icons/delete.svg"
              alt="delete-icon"
            />
          </button>
          <span className="cart-card__total-price">{data.totalPrice.toLocaleString()} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
