import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

import { ColorList } from "../components/ColorList";

export const ColorListContainer = () => {
  const colorToolStore = useColorToolStoreContext();

  const props = {
    colors: colorToolStore.colors,
    onDeleteColor: colorToolStore.removeColor,
  };

  return <ColorList {...props} />;
};
