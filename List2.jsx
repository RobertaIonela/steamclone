import React, { useState } from "react";
import "./List2.css";

const List2 = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextImages = () => {
    setStartIndex(startIndex + 3);
  };

  const previousImages = () => {
    setStartIndex(startIndex - 3);
  };

  const images = [
    {
      src: require("./images/joc27.jpg"),
      alt: "Image 1",
      discount: "10% off",
      price: "€19.00",
    },
    {
      src: require("./images/joc28.jpg"),
      alt: "Image 2",
      discount: "20% off",
      price: "€9.99",
    },
    {
      src: require("./images/joc29.jpg"),
      alt: "Image 3",
      discount: "15% off",
      price: "€14.99",
    },
    {
      src: require("./images/joc31.jpg"),
      alt: "Image 1",
      discount: "10% off",
      price: "€6.99",
    },
    {
      src: require("./images/joc32.jpg"),
      alt: "Image 2",
      discount: "20% off",
      price: "€8.99",
    },
    {
      src: require("./images/joc33.jpg"),
      alt: "Image 3",
      discount: "15% off",
      price: "€14.00",
    },
    {
      src: require("./images/joc30.jpg"),
      alt: "Image 1",
      discount: "10% off",
      price: "€9.00",
    },
    {
      src: require("./images/joc34.jpg"),
      alt: "Image 2",
      discount: "20% off",
      price: "€5.00",
    },
    {
      src: require("./images/joc35.jpg"),
      alt: "Image 3",
      discount: "15% off",
      price: "€14.99",
    },
    {
      src: require("./images/joc28.jpg"),
      alt: "Image 2",
      discount: "20% off",
      price: "€9.99",
    },
    {
      src: require("./images/joc30.jpg"),
      alt: "Image 1",
      discount: "10% off",
      price: "€9.00",
    },
    {
      src: require("./images/joc32.jpg"),
      alt: "Image 2",
      discount: "20% off",
      price: "€8.99",
    },
  ];

  const visibleImages = [];
  for (let i = startIndex; i < startIndex + 3 && i < images.length; i++) {
    visibleImages.push(images[i]);
  }

  return (
    <div className="list-containerl2">
      <div className="image-listl2">
        <div className="flex-boxl2">
          {visibleImages.map((image, index) => (
            <div className="image-containerl2" key={index}>
              <div className="image-wrapperl2">
                <div className="image-gradientl2"></div>
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="tagl2">
                <span className="pricel2">{image.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="navigationl2">
        {startIndex > 0 && (
          <button className="glow-on-hover" onClick={previousImages}>
            INAPOI
          </button>
        )}
        {startIndex + 3 < images.length && (
          <button className="glow-on-hover" onClick={nextImages}>
            INAINTE
          </button>
        )}
      </div>
    </div>
  );
};

export default List2;
