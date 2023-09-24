import { useEffect } from "react";
import "./OrderDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import Loading from "../../../components/loader/Loading";
import { singelOrder } from "../serviceApi";
import { userRequest } from "../../../requestMethods";
import { useState } from "react";
import Swal from "sweetalert2";
import { handleShowToast } from "../../../utils";

export default function OrderDetails() {
  const { order, isLoading } = useSelector((state) => state.order);
  const location = useLocation();
  const orderedId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [shipping, setShipping] = useState(order?.shippingStatus);
  const [payment, setPayment] = useState(order?.paymentStatus);

  useEffect(() => {
    singelOrder(orderedId, dispatch);
  }, [orderedId, dispatch]);

  const {
    cus_name,
    cus_phone,
    cus_postcode,
    cus_add1,
    cus_city,
    cus_email,
    shipping_method,
  } = order?.data || {};

  const handleShipping = async () => {
    const newShippingStatus =
      order.shippingStatus.toLowerCase() === "pending" ? "Shippted" : "Pending";

    try {
      await userRequest.put(`/orders/shipping/${order._id}`, {
        shippingStatus: newShippingStatus,
      });
      setShipping(newShippingStatus);
      handleShowToast("Shipping Status Changed Successfully");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error,
      });
    }
  };
  const handlePayment = async () => {
    const newPaymentStatus =
      order.paymentStatus.toLowerCase() === "pending" ? "paid" : "Pending";
    try {
      await userRequest.put(`/orders/${order._id}`, {
        paymentStatus: newPaymentStatus,
      });
      setPayment(newPaymentStatus);
      handleShowToast("Payment Status Changed Successfully");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error,
      });
    }
  };

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

  console.log(payment, "order");

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
              <p>Address : {cus_add1}</p>
              <p>City : {cus_city}</p>
              <p>Post Code : {cus_postcode}</p>
              <p>Total : ৳ {order.total_amount + order.deliveryCharge}</p>
              <p>
                Shipping Status: {shipping ? shipping : order.shippingStatus}
              </p>
              <button className="status-btn" onClick={handleShipping}>
                Change Status
              </button>
            </div>
            <div>
              <h2>Transaction Details</h2>
              <p>Transaction ID : {order.transaction_Id?.toUpperCase()}</p>
              <p>Product Price : ৳ {order.total_amount}</p>
              <p>Delivery Charge : ৳ {order.deliveryCharge}</p>
              <p>Subtotal : ৳ {order.total_amount + order.deliveryCharge}</p>
              <p>
                Method :{" "}
                {shipping_method ? shipping_method : "Cash on Delivery"}
              </p>
              <p>Payment Status : {payment ? payment : order.paymentStatus}</p>
              <button className="status-btn" onClick={handlePayment}>
                Change Status
              </button>
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
