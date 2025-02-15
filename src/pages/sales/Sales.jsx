import React, { useState, useEffect, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./sales.css";
import { userRequest } from "../../requestMethods";
import { COLORS } from "../../utils";
import Loading from "../../components/loader/Loading";
import Swal from "sweetalert2";

const Sales = () => {
  const [monthlyIncomeData, setMonthlyIncomeData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getSalesState = async () => {
      setIsloading(true);
      try {
        const res = await userRequest.get("/orders/income-stats");
        const formattedData = res.data.data.map((item) => ({
          name: MONTHS[item._id - 1],
          "Total Income": item.total_amount,
        }));
        setMonthlyIncomeData(formattedData);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      }
    };
    getSalesState();
  }, [MONTHS]);

  const totalYearlyIncome = monthlyIncomeData.reduce(
    (total, item) => total + item["Total Income"],
    0
  );

  // Media screen size controlling
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="income">
      {isLoading ? (
        <Loading name={"block"} />
      ) : (
        <>
          <h1 className="heading">
            Total Yearly Income: {totalYearlyIncome} BDT
          </h1>
          <div>
            <LineChart
              width={screenSize.width >= 800 ? 800 : 370}
              height={400}
              data={monthlyIncomeData}
              className="line-chart"
              margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Total Income"
                stroke="#00ffaa"
                activeDot={{ r: 8 }}
              />
            </LineChart>
            <div className="income-text">
              <h3 style={{ textAlign: "center" }}>Monthly Income</h3>
              <ul>
                {monthlyIncomeData.map((item, index) => (
                  <li
                    key={item.name}
                    style={{ color: COLORS[index % COLORS.length] }}
                  >
                    {item.name}: {item["Total Income"]} BDT
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sales;
