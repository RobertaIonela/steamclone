import React from "react";
import "./CardGame2.css";

const CardGame = () => {
  return (
    <div className="card2-game">
      <div className="card2-game-image">
        <img src={require("./images/cardg2.jpg")} alt="Game" />
      </div>
      <div className="card2-game-details">
        <div className="card2-game-other-images">
          <img src={require("./images/l1.jpeg")} alt="Game 1" />
          <img src={require("./images/l2.jpeg")} alt="Game 2" />
          <img src={require("./images/l3.jpeg")} alt="Game 1" />
        </div>
        <div className="card2-game-description">
          <p>
            League of Legends este un joc tip online battle arena, dezvoltat și
            de Riot Games pentru Microsoft Windows.
          </p>
          <br></br>
          <p>Data lansării inițiale: 27 octombrie 2009</p>
          <p>Dezvoltator: Riot Games</p>
          <p>Gen: MOBA ARPG</p>
          <p>
            Nominalizări: : The Game Award pentru cel mai bun joc eSport, MAI
            MULTE
          </p>
          <p>Premii: The Game Award pentru cel mai bun joc eSport, MAI MULTE</p>
        </div>
      </div>
    </div>
  );
};

export default CardGame;
