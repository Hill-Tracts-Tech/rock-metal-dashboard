import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import Loading from "../loader/Loading";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

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
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income-stats");
        setIncome(res.data.data);
        setPerc(
          (res.data.data[1].total_amount * 100) /
            res.data.data[0].total_amount -
            100
        );
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  const totalIncome = income.reduce((sum, item) => sum + item?.total_amount, 0);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const currentMonthIncome = income.find((item) => item._id === currentMonth);

  return (
    <div className="featured">
      <div className="featuredItem">
        {!currentMonthIncome ? (
          <Loading name={"ball"} />
        ) : (
          <>
            {" "}
            <span className="featuredTitle">
              {" "}
              {currentMonthIncome && MONTHS[currentMonth - 1]}
            </span>
            <div className="featuredMoneyContainer">
              {currentMonthIncome && (
                <span className="featuredMoney">
                  ৳ {currentMonthIncome.total_amount} BDT
                </span>
              )}
              <span className="featuredMoneyRate">
                %{Math.floor(perc)}{" "}
                {perc < 0 ? (
                  <ArrowDownward className="featuredIcon negative" />
                ) : (
                  <ArrowUpward className="featuredIcon" />
                )}
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </>
        )}
      </div>
      <div className="featuredItem">
        {!totalIncome ? (
          <Loading name={"ball"} />
        ) : (
          <>
            {" "}
            <span className="featuredTitle">Total Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">৳ {totalIncome}</span>
              <span className="featuredMoneyRate">
                -1.4 <ArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </>
        )}
      </div>
      <div className="featuredItem">
        {false ? (
          <Loading name={"ball"} />
        ) : (
          <>
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">৳ Not Applicable</span>
              <span className="featuredMoneyRate">
                +2.4 <ArrowUpward className="featuredIcon" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </>
        )}
      </div>
    </div>
  );
}
