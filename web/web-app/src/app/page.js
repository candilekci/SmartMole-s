"use client";
import { useEffect, useContext } from "react";
import { useCars } from "@/context/CarContext";
import "./layout.css";
import TotalChart from "@/components/Chart/TotalChart";
import DonutChart from "@/components/Chart/DonutChart";
import PieChart from "@/components/Chart/PieChart";
export default function Home() {
  const { setCars, cars } = useCars();
  return (
    <main>
      {" "}
      {cars ? (
        <div className="homeBody">
          <TotalChart data={cars} />
          <div className="donut-chart-container">
            {cars.map((item) => (
              <DonutChart data={item} />
            ))}
          </div>
          <PieChart data={cars} />
        </div>
      ) : (
        <div>loading...</div>
      )}
    </main>
  );
}
