"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const carContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/carList")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);
  return (
    <carContext.Provider value={{ cars, setCars }}>
      {children}
    </carContext.Provider>
  );
};

export const useCars = () => {
  return useContext(carContext);
};
