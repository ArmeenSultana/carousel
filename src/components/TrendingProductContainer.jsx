import React, { useEffect, useState } from "react";
import IMAGE from "../assets/logo.png";
import apis from "../utils/apis";
import axios from "axios";
import { CartContext } from "../utils/contextAPIS";
import { useContext } from "react";

const ProductCard = ({ id, price, title, image, rating }) => {
  const { cartProducts, setCardProducts } = useContext(CartContext);
  console.log("Cart Items: ", cartProducts);
  return (
    <div
      className="card shadow-lg border-0 m-2 p-3 position-relative d-flex justify-content-center align-items-center "
      style={{
        width: "18%",
      }}
      onClick={() => setCardProducts([...cartProducts, id])}
    >
      <img
        style={{
          width: "150px",
        }}
        src={image}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text w-100 text-center">{title}</p>
        <div className="d-flex justify-content-center align-items-center">
          <p className="card-text text-decoration-line-through m-0">
            {"$"}
            {price}
            {"  "}
          </p>
          <p className="card-text m-0 ms-1">
            {"$"}
            {price - price * 0.2}
          </p>
        </div>
      </div>
    </div>
  );
};

const TrendingProductContainer = () => {
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Jamal");
    let newProducts = [];
    axios.get(apis.limitProduct(limit)).then((res) => {
      res.data.map((item) => {
        newProducts.push({
          id: item.id,
          price: item.price,
          title: item.title,
          image: item.image,
          rating: item.rating,
        });
      });
      setProducts(newProducts);
    });
  }, [limit]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column ">
      <div className="d-flex justify-content-center align-items-center flex-column my-5">
        <p className="text-decoration-underline my-0">TRENDING PRODUCTS</p>
        <p className="fs-1 my-0">Our Products</p>
      </div>
      <div className="d-flex justify-content-center align-items-center my-5  flex-wrap">
        {products.map((content, index) => {
          return <ProductCard key={index} {...content} />;
        })}
      </div>
    </div>
  );
};

export default TrendingProductContainer;
