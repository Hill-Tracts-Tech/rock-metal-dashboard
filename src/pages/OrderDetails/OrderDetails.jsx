import { useEffect, useState } from "react";
import "./OrderDetails.css";
import { userRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
export default function OrderDetails() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get(`/orders/find/${productId}`);
        setProduct(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);
  console.log(product[0].data);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left-content">
          <div>Transition info</div>
          <div>product info</div>
        </div>
        <div className="right-content">
          <h3>Customer Info</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
}
