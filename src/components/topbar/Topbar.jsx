import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userRedux";

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
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="topAvatar-img"
              />
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
                <img
                  src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="topAvatar-img"
                />
              </div>
              <span>{username}</span>
              <span>{email}</span>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
