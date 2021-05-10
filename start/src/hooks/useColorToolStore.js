import { useState } from "react";

export const useColorToolStore = (initialColors) => {
  const [colors, setColors] = useState([...initialColors]);

  const appendColor = (color) => {
    setColors([
      ...colors,
      {
        ...color,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  const removeColor = (colorId) => {
    setColors(colors.filter((c) => c.id !== colorId));
  };

  return {
    colors,
    appendColor,
    removeColor,
  };
};
