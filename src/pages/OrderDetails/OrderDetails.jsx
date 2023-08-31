import { useEffect } from "react";
import "./OrderDetails.css";
import { orderedOnes } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

export default function OrderDetails() {
  const location = useLocation();
  const orderedId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { order, isLoading } = useSelector((state) => state.product);
  console.log(isLoading);
  useEffect(() => {
    orderedOnes(orderedId, dispatch);
  }, [dispatch, orderedId]);

  const columns = [
    {
      field: "order",
      headerName: "Ordered Product",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* You can render the product image or name here */}
          </div>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
    },
    {
      field: "price",
      headerName: "Total Amount",
      width: 200,
    },
    {
      field: "paymentStatus",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
    },
  ];

  return (
    <div className="container">
      {/* <div className="left-content">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <DataGrid
            rows={order.products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            checkboxSelection
            pagination
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        )}
      </div> */}
      <div className="right-content">Right side</div>
    </div>
  );
}
