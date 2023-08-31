import "./Orders.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, orderProducts } from "../../redux/apiCalls";

export default function Orders() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    orderProducts(dispatch);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };
  console.log("product", products);
  const columns = [
    { field: "transaction_Id", headerName: "Transition ID", width: 220 },
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
    { field: "paymentStatus", headerName: "Payment", width: 200 },
    {
      field: "total_amount",
      headerName: "Price",
      width: 160,
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
      width: 160,
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
            <Link to={`/orders/${params.row._id}`}>
              <button className="viewBtn">
                <Visibility />
              </button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          checkboxSelection
          pagination
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      )}
    </div>
  );
}
