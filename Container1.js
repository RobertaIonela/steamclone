import React from "react";
import "./SteamContainer.css";

const Container1 = () => {
  const games = [
    {
      id: 1,
      image: require("./images/joc17.jpg"),
      title: "Euro-Truck IBERIA",
      price: 9.99,
      discount: 0.2,
    },
    {
      id: 2,
      image: require("./images/joc18.jpg"),
      title: "Euro-Truck SCANDINAVIA",
      price: 8.99,
      discount: 0.1,
    },
    {
      id: 3,
      image: require("./images/joc19.jpg"),
      title: "Euro-Truck BEYOND ",
      price: 12.99,
      discount: 0.1,
    },
    {
      id: 4,
      image: require("./images/joc20.jpg"),
      title: "GET TO WORK",
      price: 19.99,
      discount: 0.15,
    },
  ];

  return (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container1;
