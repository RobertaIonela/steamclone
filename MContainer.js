import React from "react";
import "./MContainer.css";

const MContainer = () => {
  return (
    <div className="steam-containerMC">
      <div className="game-cardMC">
        <img
          src="https://www.pngall.com/wp-content/uploads/12/Gaming-PNG-Photo.png"
          alt="Game 1"
          className="game-imageMC"
        />
        <div className="game-detailsMC">
          <h3 className="game-titleMC">GAMING SUMMER INCEPAND CU 1/6/2023 </h3>
          <p className="game-descriptionMC">Cititi cu atentie informatiile .</p>
        </div>
      </div>
    </div>
  );
};

export default MContainer;
