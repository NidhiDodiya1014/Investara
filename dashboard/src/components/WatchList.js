import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import GeneralContext from "./GeneralContext";

import { watchlist } from "../data/data"; // Your watchlist array

const Watchlist = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock) => (
          <WatchListItem key={stock.name} stock={stock} />
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setshowWatchListActions] = useState(false);

  return (
    <li onMouseEnter={() => setshowWatchListActions(true)} onMouseLeave={() => setshowWatchListActions(false)}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} percent={stock.percent} />}
    </li>
  );
};

const WatchListActions = ({ uid, percent }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy"  onClick={() => openBuyWindow(uid, percent)}>
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};
