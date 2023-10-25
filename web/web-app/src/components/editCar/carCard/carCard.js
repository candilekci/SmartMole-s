"use client";
import { useState } from "react";
import "./carCard.css";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { deleteCar, updateItem } from "@/context/apiActions";
import { useCars } from "@/context/CarContext";
const CarCard = ({ data }) => {
  const [newData, setNewData] = useState(data);
  const [input, setInput] = useState(0);
  const [newColor, setNewColor] = useState({
    color: "",
    count: 0,
    colorId: 0,
  });
  const { cars, setCars } = useCars();
  const updateCars = (updatedCarData) => {
    const updatedCars = cars.map((car) => {
      if (car.id === updatedCarData.id) {
        return updatedCarData;
      }
      return car;
    });

    setCars(updatedCars);
  };
  const increaseClick = (colorId) => {
    if (input === 0) {
      return;
    } else {
      const updatedIncrease = newData.product.map((item) => {
        if (item.colorId === colorId) {
          return {
            ...item,
            count: parseInt(item.count) + parseInt(input),
          };
        }
        return item;
      });
      setNewData({
        ...newData,
        product: updatedIncrease,
      });
      updateCars({
        ...newData,
        product: updatedIncrease,
      });
      updateItem({
        carId: newData.id,
        data: { ...newData, product: updatedIncrease },
      });
    }
  };

  const decreaseClick = (colorId) => {
    const updatedDecrease = newData.product.map((item) => {
      if (item.colorId === colorId) {
        return {
          ...item,
          count: parseInt(item.count) - parseInt(input),
        };
      }
      return item;
    });
    setNewData({
      ...newData,
      product: updatedDecrease,
    });
    updateCars({
      ...newData,
      product: updatedDecrease,
    });
    updateItem({
      carId: newData.id,
      data: { ...newData, product: updatedDecrease },
    });
  };

  const deleteClick = (colorId) => {
    const updatedData = newData.product.filter(
      (item) => item.colorId !== colorId
    );
    setNewData({
      ...newData,
      product: updatedData,
    });
    updateCars({
      ...newData,
      product: updatedData,
    });
    updateItem({
      carId: newData.id,
      data: { ...newData, product: updatedData },
    });
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const deleteCarClick = () => {
    deleteCar({ carId: newData.id });
    const updatedData = cars.filter((item) => item.id !== newData.id);
    setCars(updatedData);
  };
  console.log(newColor);
  const addColorClick = () => {
    let maxColorId = 0;
    for (const item of data.product) {
      if (item.colorId > maxColorId) {
        maxColorId = item.colorId;
      }
    }
    const updatedData = {
      ...newData,
      product: [
        ...newData.product,
        {
          color: newColor.color,
          count: newColor.count,
          colorId: maxColorId + 1,
        },
      ],
    };
    setNewData(updatedData);
    updateCars(updatedData);
    updateItem({
      carId: newData.id,
      data: updatedData,
    });
    setNewColor({
      color: "",
      count: 0,
      colorId: 0,
    });
  };
  return (
    <div className="car-card-container">
      {newData?.product?.map((item) => (
        <div key={item.colorId} className="car-card">
          <span className="car-color">{item.color}</span>
          <span className="car-color">{item.count}</span>
          <div className="action-cont">
            <button
              onClick={() => increaseClick(item.colorId)}
              className="action-button"
            >
              <PlusOutlined />
            </button>
            <input
              onChange={(e) => handleChange(e)}
              className="count-input"
              type="number"
            />
            <button
              onClick={() => decreaseClick(item.colorId)}
              className="action-button"
            >
              <MinusOutlined />
            </button>
            <button
              onClick={() => deleteClick(item.colorId)}
              className="delete-button"
            >
              <DeleteOutlined />
            </button>
          </div>
        </div>
      ))}
      <div className="car-add-color-container">
        <footer className="car-add-color-title">Renk Ekle:</footer>
        <input
          onChange={(e) => setNewColor({ ...newColor, color: e.target.value })}
          className="car-add-color"
          placeholder="Renk Giriniz"
          value={newColor.color}
        />
        <input
          onChange={(e) =>
            setNewColor({ ...newColor, count: parseInt(e.target.value) })
          }
          value={newColor.count}
          type="number"
          className="car-add-color-count"
          placeholder="Adet"
        />
        <button onClick={addColorClick} className="car-add-color-button">
          Ekle
        </button>
      </div>
      <div className="button-container">
        <button onClick={deleteCarClick} className="deleteCar">
          Arabayı Sil
        </button>
      </div>
    </div>
  );
};

export default CarCard;
