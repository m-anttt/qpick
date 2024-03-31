import Card from "../Card/Card";
import "./style.scss";

const EarphonesCards = ({ headphonesdata, showProductInfo, title }) => {
  return (
    <div className="earphones__wrapper">
      <h2 className="earphones__title section-title">{title}</h2>
      <div className="earphones__cards">
        {headphonesdata.map((product) => {
          return (
            <Card
              data={product}
              showProductInfo={showProductInfo}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EarphonesCards;
