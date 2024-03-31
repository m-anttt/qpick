import "./style.scss";
const ProductInfo = ({ data }) => {
  return (
    <div className="product__info">
      <div className="product__main-info">
        <div className="product__image-wrapper">
          <img
            className="product__image"
            src={`./../images/products/${data.image}.png`}
            alt="product-image"
          />
        </div>
        <div className="product__description">
          <h4 className="product__title">{data.title}</h4>
          <span className="product__price">
            {data.price.toLocaleString()} ₽
          </span>
          <div className="product__charesteristics">
            <div className="product__property">
              Провод:{" "}
              <span className="product__value">
                {data.type === "wire" ? "Есть" : "Нет"}
              </span>{" "}
            </div>
            <div className="product__property">
              Страна изготовления:{" "}
              <span className="product__value">{data.origin}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__information">
        <h5 className="product__info-title">О товаре</h5>
        <p className="product__about">{data.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
