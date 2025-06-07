import React from "react";
import { FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Title from '../common/Title';
const data = require("../../data/data.json");

export default function Positions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-light rounded-lg p-4 border border-accent/10"
    >
      <Title icon={FaChartLine} subtitle={`${data.positions.length} active positions`}>
        Positions
      </Title>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-accent/10">
              <th className="text-left py-3 px-4 text-accent font-light text-sm">Product</th>
              <th className="text-left py-3 px-4 text-accent font-light text-sm">Instrument</th>
              <th className="text-right py-3 px-4 text-accent font-light text-sm">Qty.</th>
              <th className="text-right py-3 px-4 text-accent font-light text-sm">Avg.</th>
              <th className="text-right py-3 px-4 text-accent font-light text-sm">LTP</th>
              <th className="text-right py-3 px-4 text-accent font-light text-sm">P&L</th>
              <th className="text-right py-3 px-4 text-accent font-light text-sm">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {data.positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <motion.tr 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-accent/10 hover:bg-accent/5 transition-colors duration-300"
                >
                  <td className="py-3 px-4 text-secondary font-normal text-sm">{stock.product}</td>
                  <td className="py-3 px-4 text-secondary font-normal text-sm">{stock.name}</td>
                  <td className="py-3 px-4 text-right text-secondary font-normal text-sm">{stock.qty}</td>
                  <td className="py-3 px-4 text-right text-secondary font-normal text-sm">{stock.avg.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right text-secondary font-normal text-sm">{stock.price.toFixed(2)}</td>
                  <td className={`py-3 px-4 text-right font-normal text-sm ${profClass}`}>
                    <div className="flex items-center justify-end">
                      {isProfit ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </div>
                  </td>
                  <td className={`py-3 px-4 text-right font-normal text-sm ${dayClass}`}>
                    <div className="flex items-center justify-end">
                      {stock.isLoss ? <FaArrowDown className="mr-1" /> : <FaArrowUp className="mr-1" />}
                      {stock.day}
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
} 