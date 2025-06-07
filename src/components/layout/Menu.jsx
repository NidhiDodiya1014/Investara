import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChartLine, FaWallet, FaHistory, FaCog, FaSignOutAlt } from 'react-icons/fa';

const menuItems = [
  { icon: FaHome, label: "Dashboard", path: "/" },
  { icon: FaChartLine, label: "Watchlist", path: "/watchlist" },
  { icon: FaWallet, label: "Positions", path: "/positions" },
  { icon: FaHistory, label: "Orders", path: "/orders" },
  { icon: FaCog, label: "Settings", path: "/apps" },
];

export default function Menu() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-primary border-r border-accent/10 z-40">
      <div className="flex flex-col h-full p-4">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-secondary">Investara</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path}
                  className={`block w-full`}
                >
                  <div
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? "bg-accent/10 text-secondary"
                        : "text-accent hover:bg-accent/5"
                    }`}
                  >
                    <item.icon className="text-lg" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-4 border-t border-accent/10">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-accent hover:bg-accent/5 transition-all duration-300">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
} 