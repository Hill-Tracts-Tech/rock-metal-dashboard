import "./Orders.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loader/Loading";
import Swal from "sweetalert2";
import { deleteOrder, orderProducts } from "./serviceApi";

export default function Orders() {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    orderProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00ffbb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrder(id, dispatch);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const columns = [
    { field: "transaction_Id", headerName: "Transition ID", width: 150 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.products[0]?.img}
              alt=""
            />

            {params.row.products[0]?.title}
          </div>
        );
      },
    },
    { field: "paymentStatus", headerName: "Payment", width: 150 },
    { field: "shippingStatus", headerName: "Shipping Status", width: 150 },
    {
      field: "total_amount",
      headerName: "Price",
      width: 130,
      renderCell: (params) => {
        console.log(params.row);
        return <div>{params.row.total_amount + params.row.deliveryCharge}</div>;
      },
    },
    {
      field: "data.cus_name",
      headerName: "Customer",
      width: 200,
      valueGetter: (params) =>
        params.row.data.cus_name ? params.row.data?.cus_name : "Unknown",
    },
    {
      field: `phone?phone:0151634445`,
      headerName: "Phone",
      width: 130,
      valueGetter: (params) =>
        params.row.data.cus_phone ? params.row.data?.cus_phone : "01xxxxxxxxx",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={`/orders/${params.row.transaction_Id}`}>
              <button className="viewBtn">
                <Visibility />
              </button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.transaction_Id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {isLoading ? (
        <Loading name={"block"} />
      ) : (
        <DataGrid
          rows={orders}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pagination
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      )}
    </div>
  );
}
