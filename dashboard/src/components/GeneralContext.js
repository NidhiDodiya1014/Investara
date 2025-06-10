import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // you need to create this component

const GeneralContext = React.createContext({
  openBuyWindow: (uid, percent) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, percent) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // Buy window state
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedBuyUID, setSelectedBuyUID] = useState(null);
  const [selectedBuyPercent, setSelectedBuyPercent] = useState(null);

  // Sell window state
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellUID, setSelectedSellUID] = useState(null);
  const [selectedSellPercent, setSelectedSellPercent] = useState(null);

  // Open Buy Window
  const handleOpenBuyWindow = (uid, percent) => {
    setIsBuyWindowOpen(true);
    setSelectedBuyUID(uid);
    setSelectedBuyPercent(percent);
  };

  // Close Buy Window
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedBuyUID(null);
    setSelectedBuyPercent(null);
  };

  // Open Sell Window
  const handleOpenSellWindow = (uid, percent) => {
    setIsSellWindowOpen(true);
    setSelectedSellUID(uid);
    setSelectedSellPercent(percent);
  };

  // Close Sell Window
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellUID(null);
    setSelectedSellPercent(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedBuyUID}
          percent={selectedBuyPercent}
          onClose={handleCloseBuyWindow}
        />
      )}

      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedSellUID}
          percent={selectedSellPercent}
          onClose={handleCloseSellWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
