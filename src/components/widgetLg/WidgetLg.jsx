import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import { format } from "timeago.js";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data.data);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  console.log(orders);
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          {orders?.map(
            ({
              transaction_Id,
              paymentStatus,
              createdAt,
              total_amount,
              user,
            }) => {
              return (
                <tr className="widgetLgTr" key={transaction_Id}>
                  <td className="widgetLgUser">
                    <span className="widgetLgName">{user?.name}</span>
                  </td>
                  <td className="widgetLgDate">{format(createdAt)}</td>
                  <td className="widgetLgAmount">৳ {total_amount}</td>
                  <td className="widgetLgStatus">
                    <Button type={paymentStatus} />
                  </td>
                </tr>
              );
            }
          )}
        </table>
      )}
    </div>
  );
}
