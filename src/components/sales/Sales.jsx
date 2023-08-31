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

const Sales = () => {
  const [monthlyIncomeData, setMonthlyIncomeData] = useState([]);

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

  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#f17422",
    "#c71585",
    "#008080",
    "#f26d6d",
    "#3cba9f",
    "#8e5ea2",
    "#e8c3b9",
    "#c45850",
    "#00CED1",
  ];

  useEffect(() => {
    const getSalesState = async () => {
      try {
        const res = await userRequest.get("/orders/income-stats");
        const formattedData = res.data.data.map((item) => ({
          name: MONTHS[item._id - 1],
          "Total Income": item.total_amount,
        }));
        setMonthlyIncomeData(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    getSalesState();
  }, [MONTHS]);

  const totalYearlyIncome = monthlyIncomeData.reduce(
    (total, item) => total + item["Total Income"],
    0
  );

  return (
    <div className="incone">
      <h1 className="heading">Total Yearly Income: {totalYearlyIncome} BDT</h1>

      <div
        style={{
          flex: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineChart
          width={800}
          height={400}
          data={monthlyIncomeData}
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
    </div>
  );
};

export default Sales;
