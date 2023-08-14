import React, { useState } from "react";
import Formular from "./Formular.js";

const Header = () => {
  const [cartItems, setCartItems] = useState([]);
  const prices = {
    produs1: 10,
    produs2: 20,
    produs3: 15,
    // adăugați prețurile produselor dvs. aici
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += prices[item];
    });
    return total;
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src={require("./images/gaming-logo.png")} alt="Logo" />
      </a>

      <div className="buttonsHS">
        <a href="#" className="buttonsHS">
          MAGAZIN
        </a>
        <a href="#" className="buttonsHS">
          COMUNITATE
        </a>
        <a href="#" className="buttonsHS">
          CHAT
        </a>
      </div>

      <div className="buttons">
        <a href="#" className="button">
          <Formular />
        </a>
        <a href="#" className="button">
          Support
        </a>
        <div className="cart-info">
          <div className="cart-info-icon">
            <span className="cart-badge">{cartItems.length}</span>
          </div>
          <div className="cart-info-content">
            <span id="cart-total">{getTotalPrice()} lei</span>
            <span id="cart-items">
              {cartItems.length === 1 ? "produs" : "produse"}
            </span>
          </div>
        </div>
      </div>

      <button className="buy-button" onClick={() => addToCart("produs1")}>
        Cumpără produs 1
      </button>
      <button className="buy-button" onClick={() => addToCart("produs2")}>
        Cumpără produs 2
      </button>
      <button className="buy-button" onClick={() => addToCart("produs3")}>
        Cumpără produs 3
      </button>
      {/* Adăugați butoanele pentru celelalte produse */}
    </header>
  );
};

export default Header;
