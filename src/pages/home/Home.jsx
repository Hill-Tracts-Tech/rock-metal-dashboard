import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import Swal from "sweetalert2";

export default function Home() {
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
            "Active User": monthData ? monthData.total : 0,
          };
        });

        setUserStats(newData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
        isLoading={isLoading}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
