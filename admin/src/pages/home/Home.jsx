import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import axios from "axios";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { userData } from "../../dummyData";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([{name:" Test", "New User":1}]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/user/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ1Nzg2Y2QyNjA3OTIyZWE2OTAyNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzM1MzU2MSwiZXhwIjoxNjczNzg1NTYxfQ.h1VJxvoF0g6ZULgWMHQ5ZiQwMd52pAklrbsh00dH88s",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
     
        statsList.map((item) => 
        
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    
    getStats();
  }, [MONTHS]);
console.log('111', userStats)

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart 
      data={userData}
      title="User Analytics" 
      grid 
      dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
