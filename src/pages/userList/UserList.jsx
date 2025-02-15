import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Visibility } from "@material-ui/icons";
import gravatar from "gravatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { toast } from "react-toastify";
import Loading from "../../components/loader/Loading";
import Swal from "sweetalert2";

export default function UserList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3bb077",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await userRequest.delete(`/users/${id}`);
          setData((prevData) => prevData.filter((user) => user._id !== id));
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      toast.error("Error deleting user. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleAdmin = async (id) => {
    try {
      const res = await userRequest.post(`/users/${id}`, { isAdmin: true });
      const updatedData = data.filter((user) => user._id !== id);
      setData(updatedData);
      if (res.data.data) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Add as Admin Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add as admin",
      });
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      setIsloading(true);
      try {
        const res = await userRequest.get("users");
        setData(res.data.data);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      }
    };
    getUsers();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
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
      field: "isAdmin",
      headerName: "ADMIN",
      width: 160,
      renderCell: (params) => {
        return <div>{params.row.isAdmin ? "YES" : "NO"}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() => handleAdmin(params.row._id)}
              className="userListEdit"
            >
              Make Admin
            </button>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {isLoading ? (
        <Loading name={"block"} />
      ) : !data ? (
        <p>Not Found</p>
      ) : (
        <DataGrid
          rows={data}
          disableSelectionOnClick
          getRowId={(row) => row?._id}
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      )}
    </div>
  );
}
