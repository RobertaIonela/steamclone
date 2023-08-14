import React, { useState, useEffect } from "react";
import "./Review.css";

const reviewsData = [
  {
    id: 1,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc, nu m-am plictisit de el",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 2,
    gameName: "Nume Joc 2",
    description: "Incredibil , se merita !",
    image: require("./images/joc4.jpg"),
  },
  {
    id: 3,
    gameName: "Nume Joc 2",
    description: "Cel mai bun pret vreodata",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 4,
    gameName: "Nume Joc 2",
    description: "Cele mai bune reduceri le-am prins vara asta",
    image: require("./images/joc6.jpg"),
  },
  {
    id: 5,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc facut vreodata !!! ",
    image: require("./images/joc7.jpg"),
  },
  {
    id: 6,
    gameName: "Nume Joc 2",
    description: "Nu ma asteptam sa fie asa wow ",
    image: require("./images/joc8.jpg"),
  },
  {
    id: 7,
    gameName: "Nume Joc 2",
    description: "Nu m-a impresionat dar nici nu e rau",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 8,
    gameName: "Nume Joc 2",
    description: "AMAZING",
    image: require("./images/j1.jpg"),
  },
  {
    id: 9,
    gameName: "Nume Joc 2",
    description: "Cred ca am o noua obsesie",
    image: require("./images/j12.jpg"),
  },
  {
    id: 10,
    gameName: "Nume Joc 2",
    description: "Prea multe Buguri",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 11,
    gameName: "Nume Joc 2",
    description: "Am asteptat asa mult jocul acesta ",
    image: require("./images/joc1.jpg"),
  },
  {
    id: 12,
    gameName: "Nume Joc 2",
    description: "Grafica e superbaaa",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 13,
    gameName: "Nume Joc 2",
    description: "Un joc care isi merita banii",
    image: require("./images/joc2.jpg"),
  },
  {
    id: 14,
    gameName: "Nume Joc 2",
    description: "O sa-mi chem prietenii in fiecare weekend",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 1,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc, nu m-am plictisit de el",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 2,
    gameName: "Nume Joc 2",
    description: "Incredibil , se merita !",
    image: require("./images/joc4.jpg"),
  },
  {
    id: 3,
    gameName: "Nume Joc 2",
    description: "Cel mai bun pret vreodata",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 4,
    gameName: "Nume Joc 2",
    description: "Cele mai bune reduceri le-am prins vara asta",
    image: require("./images/joc6.jpg"),
  },
  {
    id: 5,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc facut vreodata !!! ",
    image: require("./images/joc7.jpg"),
  },
  {
    id: 6,
    gameName: "Nume Joc 2",
    description: "Nu ma asteptam sa fie asa wow ",
    image: require("./images/joc8.jpg"),
  },
  {
    id: 7,
    gameName: "Nume Joc 2",
    description: "Nu m-a impresionat dar nici nu e rau",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 8,
    gameName: "Nume Joc 2",
    description: "AMAZING",
    image: require("./images/j1.jpg"),
  },
  {
    id: 9,
    gameName: "Nume Joc 2",
    description: "Cred ca am o noua obsesie",
    image: require("./images/j12.jpg"),
  },
  {
    id: 10,
    gameName: "Nume Joc 2",
    description: "Prea multe Buguri",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 11,
    gameName: "Nume Joc 2",
    description: "Am asteptat asa mult jocul acesta ",
    image: require("./images/joc1.jpg"),
  },
  {
    id: 12,
    gameName: "Nume Joc 2",
    description: "Grafica e superbaaa",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 13,
    gameName: "Nume Joc 2",
    description: "Un joc care isi merita banii",
    image: require("./images/joc2.jpg"),
  },
  {
    id: 14,
    gameName: "Nume Joc 2",
    description: "O sa-mi chem prietenii in fiecare weekend",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 1,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc, nu m-am plictisit de el",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 2,
    gameName: "Nume Joc 2",
    description: "Incredibil , se merita !",
    image: require("./images/joc4.jpg"),
  },
  {
    id: 3,
    gameName: "Nume Joc 2",
    description: "Cel mai bun pret vreodata",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 4,
    gameName: "Nume Joc 2",
    description: "Cele mai bune reduceri le-am prins vara asta",
    image: require("./images/joc6.jpg"),
  },
  {
    id: 5,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc facut vreodata !!! ",
    image: require("./images/joc7.jpg"),
  },
  {
    id: 6,
    gameName: "Nume Joc 2",
    description: "Nu ma asteptam sa fie asa wow ",
    image: require("./images/joc8.jpg"),
  },
  {
    id: 7,
    gameName: "Nume Joc 2",
    description: "Nu m-a impresionat dar nici nu e rau",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 8,
    gameName: "Nume Joc 2",
    description: "AMAZING",
    image: require("./images/j1.jpg"),
  },
  {
    id: 9,
    gameName: "Nume Joc 2",
    description: "Cred ca am o noua obsesie",
    image: require("./images/j12.jpg"),
  },
  {
    id: 10,
    gameName: "Nume Joc 2",
    description: "Prea multe Buguri",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 11,
    gameName: "Nume Joc 2",
    description: "Am asteptat asa mult jocul acesta ",
    image: require("./images/joc1.jpg"),
  },
  {
    id: 12,
    gameName: "Nume Joc 2",
    description: "Grafica e superbaaa",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 13,
    gameName: "Nume Joc 2",
    description: "Un joc care isi merita banii",
    image: require("./images/joc2.jpg"),
  },
  {
    id: 14,
    gameName: "Nume Joc 2",
    description: "O sa-mi chem prietenii in fiecare weekend",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 1,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc, nu m-am plictisit de el",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 2,
    gameName: "Nume Joc 2",
    description: "Incredibil , se merita !",
    image: require("./images/joc4.jpg"),
  },
  {
    id: 3,
    gameName: "Nume Joc 2",
    description: "Cel mai bun pret vreodata",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 4,
    gameName: "Nume Joc 2",
    description: "Cele mai bune reduceri le-am prins vara asta",
    image: require("./images/joc6.jpg"),
  },
  {
    id: 5,
    gameName: "Nume Joc 2",
    description: "Cel mai tare joc facut vreodata !!! ",
    image: require("./images/joc7.jpg"),
  },
  {
    id: 6,
    gameName: "Nume Joc 2",
    description: "Nu ma asteptam sa fie asa wow ",
    image: require("./images/joc8.jpg"),
  },
  {
    id: 7,
    gameName: "Nume Joc 2",
    description: "Nu m-a impresionat dar nici nu e rau",
    image: require("./images/joc9.jpg"),
  },
  {
    id: 8,
    gameName: "Nume Joc 2",
    description: "AMAZING",
    image: require("./images/j1.jpg"),
  },
  {
    id: 9,
    gameName: "Nume Joc 2",
    description: "Cred ca am o noua obsesie",
    image: require("./images/j12.jpg"),
  },
  {
    id: 10,
    gameName: "Nume Joc 2",
    description: "Prea multe Buguri",
    image: require("./images/joc5.jpg"),
  },
  {
    id: 11,
    gameName: "Nume Joc 2",
    description: "Am asteptat asa mult jocul acesta ",
    image: require("./images/joc1.jpg"),
  },
  {
    id: 12,
    gameName: "Nume Joc 2",
    description: "Grafica e superbaaa",
    image: require("./images/joc3.jpg"),
  },
  {
    id: 13,
    gameName: "Nume Joc 2",
    description: "Un joc care isi merita banii",
    image: require("./images/joc2.jpg"),
  },
  {
    id: 14,
    gameName: "Nume Joc 2",
    description: "O sa-mi chem prietenii in fiecare weekend",
    image: require("./images/joc9.jpg"),
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [gameName, setGameName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 4000); // Schimb la 4 de secunde

    return () => {
      clearInterval(timer); // clean timer
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Game Name:", gameName);
    console.log("Review Text:", reviewText);
    console.log("Rating:", rating);
    setGameName("");
    setReviewText("");
    setRating(0);
    setShowForm(false);
  };

  return (
    <div className="reviews-section">
      <h2>Ce au spus alții</h2>
      <div className="reviews-container">
        {reviewsData.slice(currentIndex, currentIndex + 4).map((review) => (
          <div className="review" key={review.id}>
            <img src={review.image} alt={review.gameName} />
            <h3>{review.gameName}</h3>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
      <button className="review-button" onClick={() => setShowForm(true)}>
        Adaugă un review
      </button>
      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <h3>Adaugă un review</h3>
          <label htmlFor="gameName">Joc</label>
          <input
            type="text"
            id="gameName"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
          />
          <label htmlFor="reviewText">Review</label>
          <textarea
            id="reviewText"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <label htmlFor="rating">Nota</label>
          <input
            type="number"
            id="rating"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
          <button type="submit">Trimite review</button>
        </form>
      )}
    </div>
  );
};

export default Review;
