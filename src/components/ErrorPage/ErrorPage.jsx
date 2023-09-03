import React from "react";
import "./ErrorPage.css";
const ErrorPage = ({ error, onClose }) => {
  return (
    <div className="error-popup">
      <div className="error-popup-content">
        <span className="error-close-button" onClick={onClose}>
          &times;
        </span>
        <p
          style={{
            color: "red",
            fontWeight: "600",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          {error}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
