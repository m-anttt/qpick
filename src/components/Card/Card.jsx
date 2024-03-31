import { useContext } from "react";
import { AppContext } from "../App/App";
import "./style.scss";

const Card = ({ data, showProductInfo }) => {
  const { addToCart } = useContext(AppContext);
  
  return (
    <div className="card">
      <div className="card__content">
        <button className="card__info" onClick={() => showProductInfo(data)}>
          <img src="./../images/icons/info.svg" alt="information-icon" />
        </button>
        <div className="card__img-wrapper">
          <img
            src={`./images/products/${data.image}.png`}
            alt="product-image"
            className="card__img"
          />
        </div>
        <div className="card__description">
          <div className="card__top-row card__row">
            <h3 className="card__title">{data.title}</h3>
            <span
              className={
                data.id === 1
                  ? "card__price card__price--discount"
                  : "card__price"
              }
            >
              {data.price} ₽
            </span>
          </div>
          <div className="card__bottom-row card__row">
            <div className="card__rate">
              <img
                className="card__star-icon"
                src="./../images/icons/star.svg"
                alt="rate"
              />
              <span>{data.rate}</span>
            </div>
            <button className="card__buy" onClick={() => addToCart(data.id)}>
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
