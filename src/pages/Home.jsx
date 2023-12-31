import React from "react";
import Navbar from "../components/Navbar";
import CauroselContainer from "../components/CauroselContainer";
import DecorCollectionSection from "../components/DecorCollectionSection";
import TrendingProductContainer from "../components/TrendingProductContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <CauroselContainer />
      <DecorCollectionSection />
      <TrendingProductContainer />
    </>
  );
};

export default Home;
