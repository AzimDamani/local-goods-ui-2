import React from "react";
import "./CustomerMainPage.css";
import ProductCard from "../../ProductCard/ProductCard";
import CategoryBar from "../../Categories/CategoryBar";

const CustomerMainPage: React.FC = () => {
  return (
    <div className="mainpage">
      <CategoryBar />
      <div className="mainpage-products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CustomerMainPage;
