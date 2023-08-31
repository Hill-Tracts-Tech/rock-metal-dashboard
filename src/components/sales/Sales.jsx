import React from "react";
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

const Sales = () => {
  const data = [
    { month: "Jan", income: 35412 },
    { month: "Feb", income: 14580 },
    { month: "Mar", income: 50000 },
    { month: "Apr", income: 70000 },
    { month: "May", income: 60000 },
    { month: "Jun", income: 80000 },
    { month: "Jul", income: 52000 },
    { month: "Aug", income: 42000 },
    { month: "Sep", income: 32000 },
    { month: "Oct", income: 18000 },
    { month: "Nov", income: 12000 },
    { month: "Dec", income: 22000 },
  ];

  return (
    <div
      className="incone"
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
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#00ffaa"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Sales;
