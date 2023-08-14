import React, { useState } from "react";
import "./App.css";
import "./index.css";
import "./cube.css";
import MContainer from "./MContainer";
import Container1 from "./Container1";
import Titles from "./Titles";
import Titles3 from "./Titles3";
import Footer from "./Footer";
import ImageRow from "./ImageRow";
import List2 from "./List2";
import Header from "./Header";
import Formular from "./Formular.js";
import MainGames from "./MainGames.jsx";
import Review from "./Review.jsx";
import SlideShow from "./SlideShow";
import CardShow from "./CardShow";
import CardGame1 from "./CardGame1";
import CardGame2 from "./CardGame2";
import CardGame3 from "./CardGame3";
import Titles4 from "./Titles4";

function App() {
  return (
    <body>
      <header>
        <a href="#" class="logo">
          <img src={require("./images/gaming-logo.png")} alt="Logo" />
        </a>

        <div class="buttonsHS">
          <a href="#" class="buttonsHS">
            MAGAZIN
          </a>
          <a href="#" class="buttonsHS">
            COMUNITATE
          </a>
          <a href="#" class="buttonsHS">
            CHAT
          </a>
        </div>

        <div class="buttons">
          <a href="#" class="button">
            <Formular />
          </a>
          <a href="#" class="button">
            Support
          </a>
          <div class="cart-info">
            <div class="cart-info-icon">
              <span class="cart-badge">0</span>
            </div>
            <div class="cart-info-content">
              <span id="cart-total">0€</span>
              <span id="cart-items">jocuri</span>
            </div>
          </div>
        </div>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Titles3 />
      <div>
        <ImageRow />
      </div>
      <div>
        <MainGames />
      </div>
      <div>
        <Titles />
      </div>
      <br></br>
      <div>
        <Container1 />
      </div>
      <div id="top-games">
        <h2 class="game-title2">LANSĂRI NOI POPULARE</h2>
        <div class="game">
          <img src={require("./images/joc7.jpg")} alt="Joc 7" />
          <div class="game-info">
            <h3 class="game-title">Bro Falls</h3>
            <p class="game-description">
              Bro Falls is an asymmetric massively multiplayer party game with
              chaotic elements, trap activations and big Falls.
            </p>
            <p class="game-description">Gratuit</p>
          </div>
        </div>
        <div class="game">
          <img src={require("./images/joc8.jpg")} alt="Joc 8" />
          <div class="game-info">
            <h3 class="game-title">In-Sink</h3>
            <p class="game-description">
              Work together to solve puzzles and clear the escape rooms in this
              multiplayer co-op adventure prologue.
            </p>
            <p class="game-description">Gratuit</p>
          </div>
        </div>
        <div class="game">
          <img src={require("./images/joc9.jpg")} alt="Joc 9" />
          <div class="game-info">
            <h3 class="game-title">Prison Life</h3>
            <p class="game-description">
              Play as a Prisoner or a Guard with up to 12 players(or alone) in
              an online prison game.
            </p>
            <p class="game-description">2.99€</p>
          </div>
        </div>
        <div class="game">
          <img src={require("./images/joc21.jpg")} alt="Joc 21" />
          <div class="game-info">
            <h3 class="game-title">ONLY UP!</h3>
            <p class="game-description">
              Have you ever wanted to walk up to the clouds? Embark on an
              exciting journey in Only UP!
            </p>
            <p class="game-description">5.99€</p>
          </div>
        </div>
        <div class="game">
          <img src={require("./images/joc23.jpg")} alt="Joc 23" />
          <div class="game-info">
            <h3 class="game-title">System Shock</h3>
            <p class="game-description">
              A first-person fight to the death in the depths of space!
            </p>
            <p class="game-description">1.99€</p>
          </div>
        </div>
        <div class="game">
          <img src={require("./images/joc22.jpg")} alt="Joc 22" />
          <div class="game-info">
            <h3 class="game-title">World War Z</h3>
            <p class="game-description">
              World War Z is a heart-pounding coop third-person shooter for up
              to 4 players featuring massive swarms of hundreds of zombies.
            </p>
            <p class="game-description">12.99€</p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <div>
        <List2 />
      </div>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <div>
        <SlideShow />
      </div>
      <br></br>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <img
        src={require("./images/giphy.gif")}
        alt="funny GIF"
        width="20%"
      ></img>
      <br></br>
      <br></br>
      <div>
        <CardShow />
      </div>
      <div>
        <Titles4 />
      </div>
      <div>
        <CardGame1 />
      </div>
      <br></br>
      <div>
        <CardGame2 />
      </div>
      <br></br>
      <div>
        <CardGame3 />
      </div>
      <br></br>
      <Review />
      <br></br>
      <br></br>
      <br></br>

      <div>
        <MContainer />
      </div>
      <br></br>
      <div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
