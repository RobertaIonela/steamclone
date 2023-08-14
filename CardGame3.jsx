import React from "react";
import "./CardGame3.css";

const CardGame = () => {
  return (
    <div className="card3-game">
      <div className="card3-game-image">
        <img src={require("./images/cardg3.jpg")} alt="Game" />
      </div>
      <div className="card3-game-details">
        <div className="card3-game-other-images">
          <img src={require("./images/c1.jpeg")} alt="Game 1" />
          <img src={require("./images/c2.jpeg")} alt="Game 2" />
          <img src={require("./images/c3.jpeg")} alt="Game 1" />
        </div>
        <div className="card3-game-description">
          <p>
            Counter-Strike: Global Offensive este un shooter din 2012 dezvoltat
            de Valve și Hidden Path Entertainment.
          </p>
          <br></br>
          <p>Data lansării inițiale: 21 august 2012</p>
          <p>Dezvoltatori: Valve Corporation, Hidden Path Entertainment</p>
          <p>Gen: Tactical shooter</p>
          <p>Designer: Jess Cliffe</p>
          <p>Premii: The Game Award pentru cel mai bun joc eSport</p>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
