import { useContext, useState } from "react";
import { AppContext } from "../App/App";
import EarphonesCards from "../EarphonesCards/EarphonesCards";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import ProductInfo from "../ProductInfo/ProductInfo";

const Home = () => {
  const { wireless, earphones } = useContext(AppContext);
  const [modalActive, setModalActive] = useState(false);
  const [chosenProduct, setChosenProduct] = useState(null);

  const showProductInfo = (data) => {
    setModalActive(true);
    setChosenProduct(data);
  };

  return (
    <div className="container-big">
      <Header />
      <div className="container">
      <main>
          <section className="earphones menu-section">
            <EarphonesCards
              headphonesdata={earphones}
              showProductInfo={showProductInfo} title={'Наушники'}
            />
          </section>
          <section className="wireless menu-section">
            <EarphonesCards
              headphonesdata={wireless}
              showProductInfo={showProductInfo} title={'Беспроводные наушники'}
            />
          </section>
      </main>
      <Footer />
      </div>
      {modalActive ? (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          children={<ProductInfo data={chosenProduct} />}
        />
      ) : (
        <Modal modalActive={modalActive} setModalActive={setModalActive} />
      )}
    </div>
  );
};

export default Home;
