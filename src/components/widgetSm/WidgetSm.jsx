import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import Loading from "../loader/Loading";
import Swal from "sweetalert2";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      }
    };
    getUsers();
  }, []);
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
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))
        ) : (
          <Loading margin={"20px"} name={"circle"} />
        )}
      </ul>
    </div>
  );
}
