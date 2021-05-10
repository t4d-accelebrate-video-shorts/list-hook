import { useState } from "react";

import { useList } from "./useList";

const sortCars = (cars, sortField) => {
  return [...cars].sort((a, b) => {
    const aValue = String(a[sortField]).toUpperCase();
    const bValue = String(b[sortField]).toUpperCase();

    if (aValue < bValue) return -1;
    else if (aValue > bValue) return 1;
    else return 0;
  });
};

export const useCarToolStore = (initialCars) => {
  const [cars, appendCar, replaceCar, removeCar] = useList([...initialCars]);
  const [editCarId, setEditCarId] = useState(-1);
  const [sortField, setSortField] = useState("id");

  const addCar = (car) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    cars: sortCars(cars, sortField),
    editCarId,
    addCar,
    editCar: setEditCarId,
    deleteCar,
    saveCar,
    cancelCar,
    updateSortField: setSortField,
  };
};
