import React from "react";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./transaction.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/loader/Loading";

const Transaction = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      setIsLoading(true);
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getOrders();
  }, []);

  const handleShowToast = () => {
    toast.success("Payment Status Changed Successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleEdit = async (id) => {
    try {
      const field = orders.find((order) => order._id === id);
      if (!field) {
        console.log("Order not found");
        return;
      }

      const newPaymentStatus =
        field.paymentStatus.toLowerCase() === "pending" ? "Paid" : "Pending";

      const res = await userRequest.post(`/orders/${id}`, {
        paymentStatus: newPaymentStatus,
      });

      // Update the orders array with the new payment status
      const updatedOrders = orders.map((order) =>
        order._id === id ? { ...order, paymentStatus: newPaymentStatus } : order
      );

      // Update the state with the new orders array
      setOrders(updatedOrders);
      if (res.data) {
        handleShowToast();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    { field: "transaction_Id", headerName: "Transaction ID", width: 220 },
    {
      field: "name",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return <div className="createdat">{params.row?.user?.name}</div>;
      },
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 200,
      renderCell: (params) => {
        return <div className="createdat">{params.row?.user?.name}</div>;
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 200,
      renderCell: (params) => {
        return <div className="createdat">{format(params.row.createdAt)}</div>;
      },
    },
    {
      field: "total_amount",
      headerName: "Amount",
      width: 160,
      renderCell: (params) => {
        return <div className="total_amount">৳ {params.row.total_amount}</div>;
      },
    },
    {
      field: "action",
      headerName: "Payment",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <p style={{ marginRight: "10px" }}>{params.row.paymentStatus}</p>
            <button
              className="productListEdit"
              onClick={() => handleEdit(params.row._id)}
            >
              {params.row.paymentStatus === "Pending" ? "Paid" : "Pending"}
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="transaction">
      {isLoading ? (
        <Loading name={"block"} />
      ) : (
        <DataGrid
          rows={orders}
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
};

export default Transaction;
