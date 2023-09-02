import React, { useState } from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";
import gravatar from "gravatar";

export default function Topbar() {
  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const email = currentUser?.email;
  const username = currentUser?.username;
  const dispatch = useDispatch();

  const ProfileTogglePopup = () => {
    setIsPopupProfileOpen(!isPopupProfileOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const imageUrl = gravatar.url(email);

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-wrapper">
          <div className="topLeft">
            <Link to="/">
              <span className="logo">Rock Metal</span>
            </Link>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <div className="topAvatar" onClick={ProfileTogglePopup}>
              <img src={imageUrl} alt="" className="topAvatar-img" />
            </div>
          </div>
        </div>
      </div>
      {isPopupProfileOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="close" onClick={ProfileTogglePopup}>
              X
            </div>
            <div className="popupProfile">
              <div className="topAvatar">
                <img src={imageUrl} alt="" className="topAvatar-img" />
              </div>
              <span>{username}</span>
              <span>{email}</span>
              <button
                title="Logout"
                onClick={handleLogout}
                className="btn-logout"
              >
                <ExitToApp />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
