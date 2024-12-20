import { createContext, ReactNode, useContext } from "react";

const CartContext = createContext({});

type CartProviderProps = {
  children: ReactNode;
};

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
