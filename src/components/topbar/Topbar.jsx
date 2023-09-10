import React, { useState } from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  ExitToApp,
  ArrowDropDownCircle,
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Add,
  WebAsset,
  PersonAdd,
  PostAdd,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import gravatar from "gravatar";
import { logout } from "../../pages/userList/userRedux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export default function Topbar() {
  const [isPopupProfileOpen, setIsPopupProfileOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const email = currentUser?.email;
  const username = currentUser?.username;
  const location = useLocation();

  const route = location.pathname.split("/");
  const dispatch = useDispatch();

  const ProfileTogglePopup = () => {
    setIsPopupProfileOpen(!isPopupProfileOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const DrawerOpenHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
          <div className="dropdown" onClick={DrawerOpenHandler}>
            <ArrowDropDownCircle />
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
      {isDrawerOpen && (
        <div className="overlay-drawer">
          <div className="overlay-drawer-content">
            <div className="close" onClick={DrawerOpenHandler}>
              X
            </div>
            <div className="sidebarWrapperDrawer">
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                  <Link onClick={DrawerOpenHandler} to="/" className="link">
                    <li
                      className={`sidebarListItem ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <LineStyle className="sidebarIcon" />
                      Home
                    </li>
                  </Link>
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/analatics"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("analatics") ? "active" : ""
                      }`}
                    >
                      <Timeline className="sidebarIcon" />
                      Analytics
                    </li>
                  </Link>
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/sales"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("sales") ? "active" : ""
                      }`}
                    >
                      <TrendingUp className="sidebarIcon" />
                      Sales
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/users"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("users") ? "active" : ""
                      }`}
                    >
                      <PermIdentity className="sidebarIcon" />
                      Users
                    </li>
                  </Link>
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/products"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("products") ? "active" : ""
                      }`}
                    >
                      <Storefront className="sidebarIcon" />
                      Products
                    </li>
                  </Link>
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/newproduct"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("newproduct") ? "active" : ""
                      }`}
                    >
                      <Add className="sidebarIcon" />
                      Add Product
                    </li>
                  </Link>
                  <Link
                    to="/bannerList"
                    className="link"
                    onClick={DrawerOpenHandler}
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("bannerList") ? "active" : ""
                      }`}
                    >
                      <PostAdd className="sidebarIcon" />
                      Banner
                    </li>
                  </Link>
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/orders"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("orders") ? "active" : ""
                      }`}
                    >
                      <WebAsset className="sidebarIcon" />
                      Orders
                    </li>
                  </Link>
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/transaction"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("transaction") ? "active" : ""
                      }`}
                    >
                      <AttachMoney className="sidebarIcon" />
                      Transactions
                    </li>
                  </Link>
                  <Link
                    className="link"
                    onClick={DrawerOpenHandler}
                    to="/reports"
                  >
                    <li
                      className={`sidebarListItem ${
                        route.includes("reports") ? "active" : ""
                      }`}
                    >
                      <BarChart className="sidebarIcon" />
                      Reports
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                  <Link
                    onClick={DrawerOpenHandler}
                    to="/make-admin"
                    className="link"
                  >
                    <li
                      className={`sidebarListItem ${
                        location.pathname.includes("make-admin") ? "active" : ""
                      }`}
                    >
                      <PersonAdd className="sidebarIcon" />
                      Admin
                    </li>
                  </Link>
                  <li
                    className={`sidebarListItem ${
                      location.pathname === "/mail" ? "" : ""
                    }`}
                  >
                    <MailOutline className="sidebarIcon" />
                    Mail
                  </li>
                  <li
                    className={`sidebarListItem ${
                      location.pathname === "/users" ? "" : ""
                    }`}
                  >
                    <DynamicFeed className="sidebarIcon" />
                    Feedback
                  </li>
                  <li
                    className={`sidebarListItem ${
                      location.pathname === "/users" ? "" : ""
                    }`}
                  >
                    <ChatBubbleOutline className="sidebarIcon" />
                    Messages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
