import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import gravatar from "gravatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function UserList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // active status
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Add event listeners to detect changes in online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  console.log(isOnline);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={gravatar.url(params.row.email)}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
    },
    {
      field: "status",
      headerName: "Active Status",
      width: 160,
      renderCell: (params) => {
        return <div>{isOnline ? "Online" : "Offline"}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
