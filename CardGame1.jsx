import React from "react";
import "./CardGame1.css";

const CardGame = () => {
  return (
    <div className="card-game">
      <div className="card-game-image">
        <img src={require("./images/cardg.jpg")} alt="Game" />
      </div>
      <div className="card-game-details">
        <div className="card-game-other-images">
          <img src={require("./images/v1.jpeg")} alt="Game 1" />
          <img src={require("./images/v2.jpeg")} alt="Game 2" />
          <img src={require("./images/v3.jpeg")} alt="Game 1" />
        </div>
        <div className="card-game-description">
          <p>
            Valorant este un shooter free-to-play dezvoltat și publicat de Riot
            Games, pentru Microsoft Windows.
          </p>
          <br></br>
          <p>Data lansării inițiale: 2 iunie 2020</p>
          <p>Dezvoltator: Riot Games</p>
          <p>Gen: Tactical shooter</p>
          <p>
            Nominalizări: The Game Award pentru cel mai bun joc video
            multiplayer, MAI MULTE
          </p>
          <p>Premii: The Game Award pentru cel mai bun joc eSport</p>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
