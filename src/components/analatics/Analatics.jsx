import React, { useEffect, useMemo, useState } from "react";
import Chart from "../chart/Chart";
import { userRequest } from "../../requestMethods";
import "./analatics.css";

const Analatics = () => {
  const [userStats, setUserStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    const getStats = async () => {
      setIsLoading(true);
      try {
        const res = await userRequest.get("/users/stats");

        const newData = Array.from({ length: 12 }, (_, index) => {
          const monthIndex = index + 1;
          const monthData = res.data.find((item) => item._id === monthIndex);
          return {
            name: MONTHS[index],
            active_users: monthData ? monthData.total : 0,
          };
        });

        setUserStats(newData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="analatics">
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="active_users"
        isLoading={isLoading}
        analatics
      />
    </div>
  );
};

export default Analatics;
