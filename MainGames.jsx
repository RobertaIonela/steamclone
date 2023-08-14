import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
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

  return (
    <div>
      <div className="cart-info">
        <div className="cart-info-icon">
          <span className="item-count">{cartItems.length}</span>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="cart-total">
          Total: <span className="total-price">${cartTotal.toFixed(2)}</span>
        </div>
      </div>

      <div id="favorites-info">
        <div className="favorites-info-icon">
          <span className="favorite-count">{favoriteItems.length}</span>
          <i className="fa fa-heart"></i>
        </div>
      </div>
      <div className="favorites-box">
        <span className="favorite-count">{favoriteItems.length}</span>
        <i className="fa fa-heart"></i>
      </div>

      <div>
        <div id="top-games">
          <h2 class="game-title3">CELE MAI VÂNDUTE</h2>

          <div class="game-list">
            <div class="game-list-item">
              <img src={require("./images/joc1.jpg")} alt="Joc 1" />
              <div class="game-info">
                <h3 class="game-title">Stumble Guys</h3>
                <p class="game-description">
                  <del>1.99€</del>
                </p>
                <p>
                  <span class="reducere">Gratis</span>
                </p>

                <button class="buy-button" onClick={() => buyGame("Joc 1", 0)}>
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
            <div class="game-list-item">
              <img src={require("./images/joc2.jpg")} alt="Joc 2" />
              <div class="game-info">
                <h3 class="game-title">Fifa 22</h3>
                <p class="game-description">
                  <del>19.99€</del>
                </p>
                <p>
                  <span class="reducere">10.00€</span>
                </p>

                <button
                  class="buy-button"
                  onClick={() => buyGame("Joc 1", 10.0)}
                >
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
            <div class="game-list-item">
              <img src={require("./images/joc3.jpg")} alt="Joc 3" />
              <div class="game-info">
                <h3 class="game-title">Job Simulator</h3>
                <p class="game-description">
                  <del>14.99€</del>
                </p>
                <p>
                  <span class="reducere">4.99€</span>
                </p>

                <button
                  class="buy-button"
                  onClick={() => buyGame("Joc 1", 4.99)}
                >
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
            <div class="game-list-item">
              <img src={require("./images/joc4.jpg")} alt="Joc 4" />
              <div class="game-info">
                <h3 class="game-title">The Sims3</h3>
                <p class="game-description">
                  <del>4.99€</del>
                </p>
                <p>
                  <span class="reducere">Gratis</span>
                </p>

                <button class="buy-button" onClick={() => buyGame("Joc 1", 0)}>
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
            <div class="game-list-item">
              <img src={require("./images/joc5.jpg")} alt="Joc 5" />
              <div class="game-info">
                <h3 class="game-title">Farm Together</h3>
                <p class="game-description">
                  <del>19.99€</del>
                </p>
                <p>
                  <span class="reducere">11.99€</span>
                </p>

                <button
                  class="buy-button"
                  onClick={() => buyGame("Joc 1", 11.99)}
                >
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
            <div class="game-list-item">
              <img src={require("./images/joc6.jpg")} alt="Joc 6" />
              <div class="game-info">
                <h3 class="game-title">House Flipper</h3>
                <p class="game-description">
                  <del>24.99€</del>
                </p>
                <p>
                  <span class="reducere">15.00€ </span>
                </p>

                <button
                  class="buy-button"
                  onClick={() => buyGame("Joc 1", 15.0)}
                >
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
          </div>
        </div>
      </div>
      <div class="gameL">
        <div class="image-containerL">
          <img
            src={require("./images/joc1L.jpg")}
            alt="Nume joc 1"
            class="imageL"
          />
          <div>
            <div class="titleL">F1 22</div>
            <div class="descriptionL">Racing, Esports</div>
            <div class="osL">Sisteme de operare: Windows, macOS, Linux</div>
            <div class="reducere">39.99€</div>
            <button class="buy-button" onClick={() => buyGame("Joc 1", 39.99)}>
              Cumpara
            </button>
            <button class="fav-button" onClick={() => addToFavorites("Joc 1")}>
              ♡
            </button>
          </div>
        </div>
      </div>
      <div class="gameL">
        <div class="image-containerL">
          <img
            src={require("./images/joc2L.jpg")}
            alt="Nume joc 2"
            class="imageL"
          />
          <div>
            <div class="titleL">Outpath:First Journey</div>
            <div class="descriptionL">
              Construire de baza, Gestionare de resurse, Simulator de ferma
            </div>
            <div class="osL">Sisteme de operare: Windows</div>
            <div class="reducere">4.99€</div>
            <button class="buy-button" onClick={() => buyGame("Joc 1", 4.99)}>
              Cumpara
            </button>
            <button class="fav-button" onClick={() => addToFavorites("Joc 1")}>
              ♡
            </button>
          </div>
        </div>
      </div>
      <div class="gameL">
        <div class="image-containerL">
          <img
            src={require("./images/joc3L.jpg")}
            alt="Nume joc 3"
            class="imageL"
          />
          <div>
            <div class="titleL">ERROR143</div>
            <div class="descriptionL">
              Roman vizual, Simulator de intalniri, Alege-ti propria aventura
            </div>
            <div class="osL">Sisteme de operare: PlayStation 4, Xbox One</div>
            <div class="reducere">2.99€</div>
            <button class="buy-button" onClick={() => buyGame("Joc 1", 2.99)}>
              Cumpara
            </button>
            <button class="fav-button" onClick={() => addToFavorites("Joc 1")}>
              ♡
            </button>
          </div>
        </div>
      </div>
      <div class="gameL">
        <div class="image-containerL">
          <img
            src={require("./images/joc36.jpg")}
            alt="Nume joc 36"
            class="imageL"
          />
          <div>
            <div class="titleL">LOSTARK</div>
            <div class="descriptionL">
              Alege-ti propria aventura, Construire de baze
            </div>
            <div class="osL">
              Sisteme de operare:Windows, PlayStation 4, Xbox One
            </div>
            <div class="reducere">6.00€</div>
            <button class="buy-button" onClick={() => buyGame("Joc 1", 6.0)}>
              Cumpara
            </button>
            <button class="fav-button" onClick={() => addToFavorites("Joc 1")}>
              ♡
            </button>
          </div>
        </div>
      </div>
      <div class="gameL">
        <div class="image-containerL">
          <img
            src={require("./images/joc37.jpg")}
            alt="Nume joc 3"
            class="imageL"
          />
          <div>
            <div class="titleL">Rust</div>
            <div class="descriptionL">Supravietuire, Natura</div>
            <div Sisteme class="osL">
              Sisteme de operare:Windows, PlayStation 4, Xbox One
            </div>
            <div class="reducere">4.99€</div>
            <button class="buy-button" onClick={() => buyGame("Joc 1", 4.99)}>
              Cumpara
            </button>
            <button class="fav-button" onClick={() => addToFavorites("Joc 1")}>
              ♡
            </button>
          </div>
        </div>
      </div>
      <div class="gameL">
        <div class="image-containerL">
          <img
            src={require("./images/joc38.jpg")}
            alt="Nume joc 3"
            class="imageL"
          />
          <div>
            <div class="titleL">APEX Legends</div>
            <div class="descriptionL">Battle Royale</div>
            <div class="osL">
              Sisteme de operare:Windows, PlayStation 4, Xbox One
            </div>
            <div class="reducere">Gratuit</div>
            <button class="buy-button" onClick={() => buyGame("Joc 1", 0)}>
              Cumpara
            </button>
            <button class="fav-button" onClick={() => addToFavorites("Joc 1")}>
              ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
