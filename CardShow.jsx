import React, { useState } from "react";
import "./CardShow.css"; // Fișierul de stilizare CSS pentru carduri

// Componenta pentru cardul individual
const Card = ({ game }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className={`card ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={game.image} alt={game.title} />
      <div className="price-tag">
        {game.discount ? (
          <span>{`Reducere: ${game.discount}`}</span>
        ) : (
          <span>{game.price}</span>
        )}
      </div>
    </div>
  );
};

// Componenta pentru secțiunea de carduri
const CardShow = () => {
  const games = [
    {
      title: "Jocul 1",
      image: require("./images/j1.jpg"),
      price: "$19.99",

      description: "Descrierea jocului 1",
    },
    {
      title: "Jocul 2",
      image: require("./images/j2.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 1",
      image: require("./images/j3.jpg"),
      price: "$19.99",

      description: "Descrierea jocului 1",
    },
    {
      title: "Jocul 2",
      image: require("./images/j4.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 1",
      image: require("./images/j5.jpg"),
      price: "$19.99",

      description: "Descrierea jocului 1",
    },
    {
      title: "Jocul 2",
      image: require("./images/j6.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j7.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j8.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j9.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j10.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j11.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j12.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j13.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j14.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j15.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j16.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 1",
      image: require("./images/j1.jpg"),
      price: "$19.99",

      description: "Descrierea jocului 1",
    },
    {
      title: "Jocul 2",
      image: require("./images/j17.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j18.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j19.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j20.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j6.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j12.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j8.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
    {
      title: "Jocul 2",
      image: require("./images/j10.jpg"),
      price: "$24.99",

      description: "Descrierea jocului 2",
    },
  ];

  return (
    <div className="card-show">
      {games.map((game, index) => (
        <Card key={index} game={game} />
      ))}
    </div>
  );
};

export default CardShow;
