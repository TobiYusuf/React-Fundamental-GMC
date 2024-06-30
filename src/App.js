// src/App.js
import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import productData from "./Product";

const App = () => {
  const firstName = "Tobi"; // Replace with your actual first name

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Name name={productData.name} />
          <Price price={productData.price} />
          <Description description={productData.description} />
        </div>
      </div>
      <div>
        <p>Hello, {firstName ? firstName : "there!"}</p>
        {firstName && (
          <img src={productData.image} width="200px" alt="Product" />
        )}
      </div>
    </div>
  );
};

export default App;
