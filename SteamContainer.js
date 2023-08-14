import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SteamContainer.css";

function SteamContainer() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState([]);

  // Funcția pentru adăugarea unui joc în coș
  const buyGame = (gameName, gamePrice) => {
    // Adaugă jocul în coș
    setCartItems([...cartItems, { name: gameName, price: gamePrice }]);

    // Calculează prețul total al produselor din coș
    setCartTotal(cartTotal + gamePrice);
  };

  // Funcția pentru adăugarea unui joc la favorite
  const addToFavorites = (gameName) => {
    // Adaugă jocul în lista de favorite
    setFavoriteItems([...favoriteItems, gameName]);
  };
  const SteamContainer = () => {
    const games = [
      {
        id: 1,
        image: require("./images/joc10.jpg"),
        title: "Devour",
        price: 19.99,
        discount: 0.2,
      },
      {
        id: 2,
        image: require("./images/joc11.jpg"),
        title: "BackPack HERO",
        price: 14.99,
        discount: 0.1,
      },
      {
        id: 3,
        image: require("./images/joc12.jpg"),
        title: "Keep Talking",
        price: 29.99,
        discount: 0.1,
      },
      {
        id: 4,
        image: require("./images/joc13.jpg"),
        title: "HYDRONEER",
        price: 9.99,
        discount: 0.15,
      },
      {
        id: 5,
        image: require("./images/joc14.jpg"),
        title: "The Long Drive",
        price: 24.99,
        discount: 0.2,
      },
      {
        id: 6,
        image: require("./images/joc15.jpg"),
        title: "Construction Simulator",
        price: 34.99,
        discount: 0.25,
      },
      {
        id: 7,
        image: require("./images/joc16.jpg"),
        title: "Universe Sandbox",
        price: 29.99,
        discount: 0.25,
      },
      // Adaug mai multe jocuri aici
    ];

    return (
      <div>
        <div className="steam-containerSC">
          {games.map((game) => (
            <div className="game-cardSC" key={game.id}>
              <img src={game.image} alt={game.title} />
              <div className="game-detailsSC">
                <div className="titleSC">{game.title}</div>
                <div className="priceSC">
                  <span className="original-priceSC">€{game.price}</span>
                  {game.discount > 0 && (
                    <span className="discountSC">
                      -€{(game.price * game.discount).toFixed(2)}
                    </span>
                  )}
                  <span className="final-priceSC">
                    €{(game.price - game.price * game.discount).toFixed(2)}
                  </span>
                </div>
                <button class="buy-button" onClick={() => buyGame("Joc", 0)}>
                  Adaugă în coș
                </button>
                <button
                  class="fav-button"
                  onClick={() => addToFavorites("Joc 1")}
                >
                  ♡
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
}
export default SteamContainer;
