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
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/users" ? "active" : ""
                }`}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/products" ? "active" : ""
                }`}
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/newproduct" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/newproduct" ? "active" : ""
                }`}
              >
                <Add className="sidebarIcon" />
                Add Product
              </li>
            </Link>
            <Link to="/transaction" className="link">
              <li
                className={`sidebarListItem ${
                  location.pathname === "/transaction" ? "active" : ""
                }`}
              >
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <li
              className={`sidebarListItem ${
                location.pathname === "/users" ? "" : ""
              }`}
            >
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                location.pathname === "/users" ? "" : ""
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
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                location.pathname === "/users" ? "" : ""
              }`}
            >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li
              className={`sidebarListItem ${
                location.pathname === "/users" ? "" : ""
              }`}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              className={`sidebarListItem ${
                location.pathname === "/users" ? "" : ""
              }`}
            >
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
