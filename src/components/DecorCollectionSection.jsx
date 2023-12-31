import React, { useEffect, useState } from "react";
import IMAGE from "../assets/logo.png";
import axios from "axios";

const DecorCards = ({ image, text }) => {
  return (
    <>
      {/* To make it Responsive Adding Grid Layout Structure */}
      <div
        class="card shadow-lg border-0 m-2 p-3 col-md-2 col-sm-4 col-12 position-relative d-flex justify-content-center align-items-center"
        style={{
          width: "18rem",
        }}
      >
        {/* Same issue will Arise That Image Come to Front-end */}
        <img
          className="w-75"
          src={image}
          alt=""
          style={{
            zIndex: "0",
          }}
        />
        <div
          class="card-body"
          style={{
            zIndex: "12",
          }}
        >
          <button className="btn btn-primary position-absolute top-50 start-50 translate-middle-x ">
            {text}
          </button>
        </div>
      </div>
    </>
  );
};

const DecorCollectionSection = () => {
  const [cardsContent, setCardsContent] = useState([]);
  useEffect(() => {
    let newCardsContent = [];
    axios.get("https://fakestoreapi.com/products?limit=4").then((res) => {
      res.data.map((item) => {
        newCardsContent.push({
          image: item.image,
          text: "Living Room",
        });
      });
      setCardsContent(newCardsContent);
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <div className="d-flex justify-content-center align-items-center flex-column my-5">
          <p className="text-decoration-underline my-0">SHOP BY CATEGORIES</p>
          <p className="fs-1 my-0">Decor collection</p>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5 row">
          {cardsContent.map((content, index) => {
            return <DecorCards key={index} {...content} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DecorCollectionSection;
