import { useEffect } from "react";
import "./OrderDetails.css";
import { orderedOnes } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import Loading from "../../components/loader/Loading";

export default function OrderDetails() {
  const location = useLocation();
  const orderedId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { order, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    orderedOnes(orderedId, dispatch);
  }, [orderedId]);

  const {
    cus_name,
    cus_phone,
    cus_postcode,
    ship_add1,
    ship_city,
    shipping_method,
    total_amount,
    tran_id,
    cus_email,
  } = order?.data || {};

  const columns = [
    {
      field: "_id",
      headerName: "Product ID",
      width: 200,
    },
    {
      field: "title",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 160,
    },
    {
      field: "size",
      headerName: "Size",
      width: 160,
    },
    {
      field: "color",
      headerName: "Color",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
  ];

  const { products } = order;

  return (
    <div className="superContainer">
      {isLoading ? (
        <div style={{ marginTop: "100px" }}>
          <Loading name={"block"} />
        </div>
      ) : (
        <>
          <div className="shipping">
            <div>
              <h2>Customer Details</h2>
              <p>Name : {cus_name}</p>
              <p>Phone : {cus_phone}</p>
              <p>Email : {cus_email}</p>
            </div>
            <div>
              <h2>Shipping Details</h2>
              <p>Address : {ship_add1}</p>
              <p>City : {ship_city}</p>
              <p>Post Code : {cus_postcode}</p>
              <p>Total : ৳ {total_amount}</p>
            </div>
            <div>
              <h2>Transaction Details</h2>
              <p>Transaction ID : {tran_id}</p>
              <p>Total : ৳ {total_amount}</p>
              <p>Method : {shipping_method}</p>
              <p>
                Shipping :{" "}
                {shipping_method ? shipping_method : order.paymentStatus}
              </p>
            </div>
          </div>
          <div className="container" style={{ height: "400px" }}>
            {!products ? (
              "Loading..."
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
        </>
      )}
    </div>
  );
}
