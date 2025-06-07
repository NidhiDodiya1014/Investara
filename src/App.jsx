import React from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Menu from "./components/layout/Menu";
import Dashboard from "./components/layout/Dashboard";
import WatchList from "./components/dashboard/WatchList";
import Positions from "./components/trading/Positions";
import Orders from "./components/trading/Orders";
import Funds from "./components/common/Funds";
import Apps from "./components/common/Apps";

function App() {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <TopBar />
      <div className="flex min-h-screen">
        <Menu />
        <main className="flex-1 ml-64 mt-16 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App; 