import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import Loading from "../loader/Loading";
import UserPopup from "../UserPopup/UserPopup";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const [open, setOpen] = useState(false);

  const setPopup = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data.data);
        setLoading(false);
      } catch (error) {
        <ErrorPage error={error} onClose={null} />;
        console.log(error);
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  // Function to open the UserPopup with a selected user
  const openUserPopup = (user) => {
    setSelectedUser(user);
  };

  // Function to close the UserPopup
  const closeUserPopup = () => {
    setSelectedUser(null); // Reset the selected user to null
  };
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {!loading ? (
          users?.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user?.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user?.name}</span>
              </div>
              <button
                className="widgetSmButton"
                onClick={() => openUserPopup(user)}
              >
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))
        ) : (
          <Loading margin={"20px"} name={"circle"} />
        )}
      </ul>
      {selectedUser && (
        <UserPopup user={selectedUser} onClose={closeUserPopup} />
      )}
    </div>
  );
}
