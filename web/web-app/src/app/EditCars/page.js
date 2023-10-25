"use client";
import { useState } from "react";
import CarShow from "@/components/editCar/carShow/carShow";
import { useCars } from "@/context/CarContext";
import "./editCars.css";
import { addCar } from "@/context/apiActions";
const EditCars = () => {
  const { cars, setCars } = useCars();
  const [newCar, setNewCar] = useState({
    name: "",
    product: [],
  });
  const addNewCar = () => {
    if (newCar.name) {
      addCar({ data: newCar });
      setCars([...cars, newCar]);
      setNewCar({ name: "", product: [] });
    } else {
      alert("Lütfen Araba Modeli Giriniz");
    }
  };
  return (
    <div>
      <h1 className="edit-header">My Cars</h1>
      {cars?.map((car) => (
        <CarShow data={car} />
      ))}

      <div className="add-new-car">
        <span className="add-car-tittle">Araba Ekle </span>
        <input
          value={newCar.name}
          className="add-car-input"
          type="text"
          placeholder="Araba Modeli"
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <button onClick={addNewCar} className="add-new-car-button">
          Yeni Araba Ekle
        </button>
      </div>
    </div>
  );
};

export default EditCars;
