import React, { useState } from "react";
import "./Formular.css";
const ButtonWithForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nume:", name);
    console.log("Parolă:", password);

    setName("");
    setPassword("");
  };

  return (
    <div>
      <button
        onClick={toggleForm}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Log In
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Nume:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Introdu numele"
            />
          </label>

          <label>
            Parolă:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Introdu parola"
            />
          </label>
          <button type="submit" className="submit-button">
            Trimite
          </button>
        </form>
      )}
    </div>
  );
};

export default ButtonWithForm;
