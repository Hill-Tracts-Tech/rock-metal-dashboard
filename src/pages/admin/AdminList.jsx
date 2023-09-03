import "./adminList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import gravatar from "gravatar";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { toast } from "react-toastify";
import Loading from "../../components/loader/Loading";
import Swal from "sweetalert2";

export default function AdminList() {
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

  useEffect(() => {
    const getAdmin = async () => {
      setIsloading(true);
      try {
        const res = await userRequest.get("users/?admin=admin");
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
    getAdmin();
  }, []);

  const handleAdminStatus = async (id) => {
    try {
      const res = await userRequest.post(`/users/${id}`, { isAdmin: false });
      const updatedData = data.filter((user) => user._id !== id);
      setData(updatedData);
      if (res.data.data) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Removed from Admin",
        });
      }
    } catch (error) {
      // Handle any errors here
      console.error("Error removing user from admin:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to remove from admin",
      });
    }
  };

  const columns = [
    { field: "_id", headerName: "ADMIN ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="adminListUser">
            <img
              className="adminListImg"
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
      width: 120,
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
              onClick={() => handleAdminStatus(params.row._id)}
              className="adminListEdit"
            >
              Remove
            </button>
            <DeleteOutline
              className="adminListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="adminList">
      {isLoading && !data ? (
        <Loading name={"block"} />
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
