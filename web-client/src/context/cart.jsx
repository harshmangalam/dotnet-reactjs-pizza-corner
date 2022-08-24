import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [pizza, setPizza] = useState([]);

  const addToCart = (newPizza) => {
    setPizza((pizza) => [...pizza, newPizza]);
  };

  
  return (
    <CartContext.Provider value={{ pizza, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => useContext(CartContext)