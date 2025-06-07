import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaChartLine, FaBell, FaUser, FaCog } from "react-icons/fa";

const TopBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 h-16 bg-primary border-b border-secondary/10 z-50 shadow-lg"
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left section - Title */}
        <Link to="/" className="flex items-center space-x-2">
          <FaChartLine className="text-2xl text-secondary" />
          <h1 className="text-xl font-bold text-secondary">Investara</h1>
        </Link>

        {/* Center section - Menu */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-secondary hover:text-white transition-colors cursor-pointer ${
                isActive("/") ? "text-white" : ""
              }`}
            >
              Dashboard
            </motion.div>
          </Link>
          <Link to="/watchlist">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-secondary hover:text-white transition-colors cursor-pointer ${
                isActive("/watchlist") ? "text-white" : ""
              }`}
            >
              Watchlist
            </motion.div>
          </Link>
          <Link to="/positions">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-secondary hover:text-white transition-colors cursor-pointer ${
                isActive("/positions") ? "text-white" : ""
              }`}
            >
              Positions
            </motion.div>
          </Link>
          <Link to="/orders">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-secondary hover:text-white transition-colors cursor-pointer ${
                isActive("/orders") ? "text-white" : ""
              }`}
            >
              Orders
            </motion.div>
          </Link>
        </div>

        {/* Right section - User profile */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-secondary hover:text-white transition-colors"
          >
            <FaBell className="text-xl" />
          </motion.button>
          <Link to="/apps">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-secondary hover:text-white transition-colors"
            >
              <FaCog className="text-xl" />
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 p-2 text-secondary hover:text-white transition-colors"
          >
            <FaUser className="text-xl" />
            <span>Welcome Back!</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar; 