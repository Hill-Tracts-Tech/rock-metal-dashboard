import "./BannerList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteSlider, getSliders } from "../AddBanner/BannerApi";
import Loading from "../../components/loader/Loading";

export default function BannerList() {
  const dispatch = useDispatch();
  const { sliders, isLoading } = useSelector((state) => state.slider);

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3bb077",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSlider(id, dispatch);
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "slider",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="bannerListItem">
            <img className="bannerListImg" src={params?.row?.img} alt="" />
            {params?.row?.title}
          </div>
        );
      },
    },
    { field: "cat", headerName: "Category", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/banner/" + params.row._id}>
              <button className="bannerListEdit">
                Update
                <Edit />
              </button>
            </Link>
            <DeleteOutline
              className="bannerListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
    {
      field: "desc",
      headerName: "Description",
      width: 300,
    },
  ];

  return (
    <div
      className="bannerList"
      style={{ width: "100%", overflow: "", height: "50vh" }}
    >
      <p className="b-title">Banners</p>
      {isLoading ? (
        <Loading name="block" />
      ) : (
        <DataGrid
          className="data-grid"
          rows={sliders}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row?._id}
          rowsPerPageOptions={[10]}
        />
      )}
      <Link to="/add-banner">
        <button className="add-banner-btn">Add New</button>
      </Link>
    </div>
  );
}
