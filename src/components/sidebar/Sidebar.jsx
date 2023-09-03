import "./sidebar.css";
import {
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
  WorkOutline,
  Report,
  Add,
  WebAsset,
  PersonAdd,
  KeyboardArrowRight,
} from "@material-ui/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const location = useLocation();

  const route = location.pathname.split("/");

  console.log(route.includes(""), "route");

  const DrawerOpenHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="sidebar">
      <button className="drawer-btn" onClick={DrawerOpenHandler}>
        <KeyboardArrowRight />
      </button>

      <div className="sidebarWrapper">
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
            <Link onClick={DrawerOpenHandler} to="/analatics" className="link">
              <li
                className={`sidebarListItem ${
                  route.includes("analatics") ? "active" : ""
                }`}
              >
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link onClick={DrawerOpenHandler} to="/sales" className="link">
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
            <Link onClick={DrawerOpenHandler} to="/users" className="link">
              <li
                className={`sidebarListItem ${
                  route.includes("users") ? "active" : ""
                }`}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link onClick={DrawerOpenHandler} to="/products" className="link">
              <li
                className={`sidebarListItem ${
                  route.includes("products") ? "active" : ""
                }`}
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link onClick={DrawerOpenHandler} to="/newproduct" className="link">
              <li
                className={`sidebarListItem ${
                  route.includes("newproduct") ? "active" : ""
                }`}
              >
                <Add className="sidebarIcon" />
                Add Product
              </li>
            </Link>
            <Link onClick={DrawerOpenHandler} to="/orders" className="link">
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
            <Link className="link" onClick={DrawerOpenHandler} to="/reports">
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
            <Link onClick={DrawerOpenHandler} to="/make-admin" className="link">
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
      {/* Drawer */}
      {isDrawerOpen && (
        <div className="overlay-drawer" onClick={DrawerOpenHandler}>
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
    </div>
  );
}
