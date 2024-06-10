import { ReactNode, createContext, useState } from "react";
import { CoffeProps, CoffeMarketProps } from "@/@types/CoffeInterface";

interface CoffeContextProps {
  coffes: CoffeMarketProps[];
  handleAddCoffe: (coffe: CoffeProps, quantity: number) => void;
  removeItem: (itemId: string) => void
}

export const CoffeContext = createContext({} as CoffeContextProps)

export function CyclesContextProvider({ children }: { children: ReactNode }) {
  const [coffes, setCoffes] = useState<CoffeMarketProps[]>([]);

  function handleAddCoffe(coffe: CoffeProps, quantity: number) {
    setCoffes((state) => [...state, { ...coffe, quantity }])
  }

  function removeItem (itemId: string) {
    const filteredCoffes = coffes.filter(coffe => coffe.id !== itemId)
    setCoffes(filteredCoffes)
  }
  
  return (
    <CoffeContext.Provider value={{
      coffes,
      handleAddCoffe,
      removeItem
    }}>
      {children}
    </CoffeContext.Provider>
  )
}