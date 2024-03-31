import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import headphones from "../../data/cards";
import "./App.scss";

export const AppContext = createContext(null);

function App() {
  const [productsData, setProductsData] = useState(headphones);
  const [cartProducts, setCartProducts] = useState([]);
  const [favourites, setFavourites] = useState(2);
  const [cart, setCart] = useState(0);

  const earphones = productsData.filter((product) => product.type === "wire");
  const wireless = productsData.filter(
    (product) => product.type === "wireless"
  );

  useEffect(() => {
    if (sessionStorage.getItem("products") === null) {
      const products = JSON.stringify([]);
      sessionStorage.setItem("products", products);
    } else {
      const products = JSON.parse(sessionStorage.getItem("products"));
      setCartProducts(products);
    }
  }, []);

  useEffect(() => {
    setCart(cartProducts.reduce((prev, next) => prev + next.amount, 0));
    updateStorage();
  }, [cartProducts]);

  const updateStorage = () => {
    sessionStorage.setItem("products", JSON.stringify(cartProducts));
  };
  const addToCart = (id) => {
    const productIndex = cartProducts.findIndex((el) => el.id === id);
    if (productIndex === -1) {
      const newProduct = productsData.find((el) => el.id === id);
      setCartProducts((prevProducts) => [...prevProducts, newProduct]);
    } else {
      setCartProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        ++updatedProducts[productIndex].amount;
        updatedProducts[productIndex].totalPrice =
          updatedProducts[productIndex].amount *
          updatedProducts[productIndex].price;
        return updatedProducts;
      });
    }
  };

  const countTotal = () => {
    return cartProducts.reduce((prev, next) => prev + next.totalPrice, 0);
  };

  const removeSingleItemFromCart = (id) => {
    const productIndex = cartProducts.findIndex((el) => el.id === id);
    setCartProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      const amount =
        updatedProducts[productIndex].amount === 1
          ? 1
          : updatedProducts[productIndex].amount - 1;
      updatedProducts[productIndex].amount = amount;
      updatedProducts[productIndex].totalPrice =
        updatedProducts[productIndex].amount *
        updatedProducts[productIndex].price;
      return updatedProducts;
    });
  };

  const deleteFromCart = (id) => {
    const products = cartProducts.filter((product) => product.id !== id);
    setCartProducts(products);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          cartProducts,
          favourites,
          cart,
          addToCart,
          removeSingleItemFromCart,
          deleteFromCart,
          earphones,
          wireless,
          countTotal,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
