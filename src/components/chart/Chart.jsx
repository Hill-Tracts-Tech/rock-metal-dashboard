import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loading from "../loader/Loading";
import { COLORS } from "../../utils";

export default function Chart({
  title,
  data,
  dataKey,
  grid,
  isLoading,
  analatics,
}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        {isLoading ? (
          <Loading name={"block"} />
        ) : (
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        )}
      </ResponsiveContainer>
      {analatics && (
        <>
          <p style={{ margin: "20px 0", textAlign: "center" }}>
            Month : Number Of Users
          </p>
          <div style={{ display: "flex", gap: "25px" }}>
            {data.map((item, index) => (
              <div
                key={index}
                style={{
                  color: COLORS[index % COLORS.length],
                }}
              >
                {item.active_users > 0 ? (
                  <p>
                    {item.name} : {item.active_users}
                  </p>
                ) : (
                  <noscript />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
