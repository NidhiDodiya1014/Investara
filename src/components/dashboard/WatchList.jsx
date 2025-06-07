import React from "react";
import { FaSearch, FaStar, FaList } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Title from '../common/Title';
const data = require("../../data/data.json");

export default function WatchList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-light rounded-lg p-4 border border-accent/10"
    >
      <Title icon={FaList} subtitle={`${data.watchlist.length} stocks in your watchlist`}>
        Watchlist
      </Title>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search stocks..."
          className="bg-primary text-secondary px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 border border-accent/10 w-full"
        />
        <FaSearch className="absolute left-3 top-3 text-accent" />
      </div>

      <div className="space-y-2">
        {data.watchlist.map((stock, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-primary p-3 rounded-lg hover:bg-accent/5 transition-colors duration-300 cursor-pointer border border-accent/10"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-secondary font-medium">{stock.name}</h4>
                <p className="text-accent text-sm">{stock.symbol}</p>
              </div>
              <div className="text-right">
                <p className="text-secondary font-medium">{stock.price}</p>
                <p className={`text-sm ${stock.isLoss ? 'text-red-500' : 'text-green-500'}`}>
                  {stock.day}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
