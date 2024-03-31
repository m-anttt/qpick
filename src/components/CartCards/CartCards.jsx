import { useContext } from "react";
import { AppContext } from "../App/App";
import CartCard from "../CartCard/CartCard";

const CartCards = () => {
  const { cartProducts } = useContext(AppContext);

  return (
    <div className="cart__cards">
      {cartProducts.map((product) => {
        return <CartCard data={product} key={product.id}/>;
      })}
    </div>
  );
};

export default CartCards;
