import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarTable } from "../components/CarTable";

export const CarTableContainer = () => {
  const carToolStore = useCarToolStoreContext();

  const props = {
    cars: carToolStore.cars,
    editCarId: carToolStore.editCarId,
    onEditCar: carToolStore.editCar,
    onDeleteCar: carToolStore.deleteCar,
    onSaveCar: carToolStore.saveCar,
    onCancelCar: carToolStore.cancelCar,
    onUpdateSortField: carToolStore.onUpdateSortField,
  };

  return <CarTable {...props} />;
};
