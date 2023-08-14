import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">👇🏻Ne poti urmari aici👇🏻</h2>

        <div className="logo-containerF">
          <a href="https://www.instagram.com/steam_games_official/">
            <img
              src="https://seeklogo.com/images/I/instagram-logo-2D3332C00B-seeklogo.com.png"
              alt="Logo 2"
              className="logoF"
            />
          </a>
          <a href="https://www.facebook.com/Steam/">
            <img
              src="https://freepngimg.com/thumb/facebook/62559-facebook,-computer-facebook-inc.-icons-download-free-image-thumb.png"
              alt="Logo 2"
              className="logoF"
            />
          </a>
        </div>
        <div className="button-containerF">
          <a href="#top" className="buttonF">
            Acasa
          </a>
        </div>
        <p className="footer-text">
          Informaţii despre Statistici pentru Pagini · Confidenţialitate ·
          Condiţii de utilizare · Publicitate · Opţiuni pentru reclame · Module
          cookie · FunHouse © 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
