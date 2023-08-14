import React, { useState, useRef, useEffect } from "react";
import "./ImageRow.css";

const ImageItem = ({ image, description }) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const itemRef = useRef(null);
  const [gradientWidth, setGradientWidth] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleBuyClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (itemRef.current) {
        const width = itemRef.current.offsetWidth;
        setGradientWidth(width);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`image-item ${hovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={itemRef}
    >
      <div className="image-gradient" style={{ width: gradientWidth }} />
      <img src={image} alt={description} className="thumbnail-image" />
      <div className="image-description">
        <p>{description}</p>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={image} alt={description} className="modal-image" />
            <div className="modal-description">
              <p>{description}</p>
              <button>Testează</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ImageRow = () => {
  return (
    <div className="image-row">
      <ImageItem
        image={require("./images/freetoplay.png")}
        description="Free To Play"
      />

      <ImageItem image={require("./images/puzzle.png")} description="Puzzle" />
      <ImageItem
        image={require("./images/openworld.png")}
        description="Open World"
      />
      <ImageItem image={require("./images/horror.png")} description="Horror" />
      <ImageItem image={require("./images/action.png")} description="Action" />
    </div>
  );
};

export default ImageRow;
