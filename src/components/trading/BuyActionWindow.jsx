import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GeneralContext } from "../common/GeneralContext";

import "./BuyActionWindow.css";

export default function BuyActionWindow({ uid }) {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="w-[40%] h-[63%] bg-[#f5f5f5] absolute bottom-0 left-[35%] cursor-move box-border z-100 rounded border border-[#eeeeee]" id="buy-window" draggable="true">
      <div className="p-4 bg-white pb-8">
        <div className="flex items-center justify-between mt-4 mb-4">
          <fieldset className="max-w-[120px] box-border border border-[#ddd] mr-2">
            <legend className="ml-2.5 text-sm px-1">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className="border-none mr-2 max-w-[130px] min-h-[35px] px-3 box-border text-lg focus:outline-none"
            />
          </fieldset>
          <fieldset className="max-w-[120px] box-border border border-[#ddd] mr-2">
            <legend className="ml-2.5 text-sm px-1 text-[#ddd]">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              className="border-none mr-2 max-w-[130px] min-h-[35px] px-3 box-border text-lg focus:outline-none"
            />
          </fieldset>
        </div>
      </div>

      <div className="w-full box-border flex items-center justify-between relative top-[10%] px-5">
        <span className="text-sm">Margin required ₹140.65</span>
        <div>
          <Link className="inline-block px-5 py-2.5 rounded text-white bg-[#4184f3] hover:bg-[#74a7fa] mr-0.5 ml-0.5" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="inline-block px-5 py-2.5 rounded text-[#666666] bg-[#d4d4d4] hover:bg-[#9b9b9b] hover:text-white mr-0.5 ml-0.5" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
} 