import { useContext } from "react";
import { createContext, useState } from "react";

const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToBasket = (newPizza) => {
    setCart((cart) => [...cart, { item: newPizza, count: 1 }]);
  };

  return (
    <BasketContext.Provider value={{ cart, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);
