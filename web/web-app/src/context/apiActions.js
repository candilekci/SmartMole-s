"use client";
import axios from "axios";

const updateItem = ({ carId, data }) => {
  axios.put(`http://localhost:8000/carList/${carId}`, data).then((res) => {
    console.log("Item", { carId, data });
  });
};
const deleteCar = ({ carId }) => {
  axios.delete(`http://localhost:8000/carList/${carId}`).then((res) => {
    console.log("deleteItem", { carId });
  });
};
const addCar = ({ data }) => {
  axios.post(`http://localhost:8000/carList`, data).then((res) => {
    console.log("addItem", { data });
  });
};
export { updateItem, deleteCar, addCar };
