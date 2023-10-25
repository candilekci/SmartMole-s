"use client";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import "./carShow.css";
import CarCard from "../carCard/carCard";
const CarShow = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div key={data.id}>
      <button onClick={handleClick} className="carShow-cont">
        <span className="carShow-name">{data?.name}</span>
        <DownOutlined
          style={show ? { ...styles.icon, ...styles.trueIcon } : styles.icon}
        />
      </button>
      {show && <CarCard data={data} />}
    </div>
  );
};

export default CarShow;

const styles = {
  icon: {
    fontSize: 30,
  },

  trueIcon: {
    transform: "rotate(180deg)",
  },
};
