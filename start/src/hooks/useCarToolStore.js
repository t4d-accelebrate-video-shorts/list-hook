import { useState } from "react";

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
  const [cars, setCars] = useState([...initialCars]);

  const [editCarId, setEditCarId] = useState(-1);
  const [sortField, setSortField] = useState("id");

  const addCar = (car) => {
    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map((c) => c.id), 0) + 1,
      },
    ]);

    setEditCarId(-1);
  };

  const saveCar = (car) => {
    const newCars = [...cars];
    const carIndex = newCars.findIndex((c) => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    setCars(cars.filter((c) => c.id !== carId));
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
