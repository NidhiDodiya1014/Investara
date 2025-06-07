import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

export default function GeneralContextProvider({ children }) {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

  const openBuyWindow = () => setIsBuyWindowOpen(true);
  const closeBuyWindow = () => setIsBuyWindowOpen(false);

  return (
    <GeneralContext.Provider value={{ isBuyWindowOpen, openBuyWindow, closeBuyWindow }}>
      {children}
    </GeneralContext.Provider>
  );
} 