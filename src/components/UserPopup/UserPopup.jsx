import React from "react";
import "./UserPopup.css";
import { Person, Email, Phone } from "@material-ui/icons";
const UserPopup = ({ user, onClose }) => {
  console.log(user, onClose);
  return (
    <div className="user-popup">
      <div className="user-popup-content">
        <span className="user-close-button" onClick={onClose}>
          &times;
        </span>
        {user && (
          <div className="contact">
            <div>
              <Person />
              <Email />
              <Phone />
            </div>
            <div>
              <p>: {user.name}</p>
              <a href={`mailto:${user.mail}`}> : {user.email}</a>
              <a href={`tel:${user.phone}`}>: {user.phone}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPopup;
