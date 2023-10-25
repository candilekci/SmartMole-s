import { createContext, useContext, useState, useEffect } from "react";
import api from "../../db.json";
const carContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(api.carList);

  //  kendi cihazımda çalıştırdığım için locale bağlanamıyorum sadece canlı
  //   useEffect(() => {
  //     axios
  //       .get("https://10.0.2.2:8000/carList")
  //       .then((response) => {
  //         setCars(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Hata:", error);
  //       });
  //   }, []);

  return (
    <carContext.Provider value={{ cars, setCars }}>
      {children}
    </carContext.Provider>
  );
};

export const useCars = () => {
  return useContext(carContext);
};
