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

const Transaction = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data.data);
      } catch {}
    };
    getOrders();
  }, []);

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
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <p style={{ marginRight: "10px" }}>{params.row.paymentStatus}</p>
            <button className="productListEdit">Edit</button>
          </>
        );
      },
    },
  ];

  return (
    <div className="transaction">
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
    </div>
  );
};

export default Transaction;
