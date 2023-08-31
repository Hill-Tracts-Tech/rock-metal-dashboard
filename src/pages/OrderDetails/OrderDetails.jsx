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
  console.log(order[0].data);
  console.log(order);
  const columns = [
    {
      field: "order",
      headerName: "Ordered Product",
      width: 220,
      renderCell: (params) => {
        // console.log(params.row?.products);
        return (
          <div className="orderList">
            {params.row.products.map((product, index) => (
              <div className="orderListItem" key={index}>
                <img className="orderListImg" src={product.img} alt="" />
                {product.title}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderList">
            {params.row.products.map((product, index) => (
              <div className="orderListItem" key={index}>
                {product.quantity}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Total Amount",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="orderList">
            {params.row.products.map((product, index) => (
              <div className="orderListItem" key={index}>
                {product.price}
              </div>
            ))}
          </div>
        );
      },
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
      <div className="left-content">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <DataGrid
            rows={order}
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
      <div className="right-content">
        <h3>Customer Details</h3>
        <div className="cus_details">
          <div>
            <h4>Name</h4>
            <h4>City</h4>
            <h4>Address</h4>
            <h4>Mobile No</h4>
            <h4>PO</h4>
            <h4>Card Name</h4>
            <h4>Product Category</h4>
            <h4>Shipping Address</h4>
            <h4>Shipping Method</h4>
            <h4>Total Amount</h4>
          </div>
          <div>
            <h4>: {order[0].data.cus_name}</h4>
            <h4>: {order[0].data.cus_city}</h4>
            <h4>: {order[0].data.cus_add1}</h4>
            <h4>: {order[0].data.cus_phone}</h4>
            <h4>: {order[0].data.cus_postcode}</h4>
            <h4>: {order[0].data.multi_card_name}</h4>
            <h4>: {order[0].data.product_category}</h4>
            <h4>: {order[0].data.ship_add1}</h4>
            <h4>: {order[0].data.shipping_method}</h4>
            <h4>: {order[0].data.total_amount} BDT</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
