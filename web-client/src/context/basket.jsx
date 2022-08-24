import { useContext } from "react";
import { createContext, useState } from "react";

const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [pizza, setPizza] = useState([]);

  const addToBasket = (newPizza) => {
    setPizza((pizza) => [...pizza, newPizza]);
  };

  
  return (
    <BasketContext.Provider value={{ pizza, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
}


export const useBasket = () => useContext(BasketContext)