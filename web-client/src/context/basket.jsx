import { useContext } from "react";
import { createContext, useState } from "react";

const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToBasket = (newPizza) => {
    const isAvailable = cart.find((c) => c.item._id === newPizza._id);
    if (isAvailable) {
      return false;
    }
    setCart((cart) => [...cart, { item: newPizza, count: 1 }]);
    return true;
  };

  const removeFromBasket = (pizzaId) => {
    const filteredCart = cart.filter((c) => c.item._id !== pizzaId);
    setCart(filteredCart);
  };

  const increaseBasketPizzaCount = (pizzaId) => {
    const finalCart = cart.map((c) => {
      if (c.item._id === pizzaId) {
        return {
          ...c,
          count: c.count + 1,
        };
      } else {
        return c;
      }
    });
    setCart(finalCart);
  };

  const decreaseBasketPizzaCount = (pizzaId) => {
    const finalCart = cart.map((c) => {
      if (c.item._id === pizzaId) {
        return {
          ...c,
          count: c.count - 1,
        };
      } else {
        return c;
      }
    });
    setCart(finalCart);
  };
  return (
    <BasketContext.Provider
      value={{
        cart,
        addToBasket,
        removeFromBasket,
        increaseBasketPizzaCount,
        decreaseBasketPizzaCount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);
