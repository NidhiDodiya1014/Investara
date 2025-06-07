import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaList } from "react-icons/fa";
import WatchList from "../dashboard/WatchList";
import Positions from "../trading/Positions";
import Title from "../common/Title";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Title icon={FaChartLine} subtitle="Monitor your investments and market activity">
        Dashboard Overview
      </Title>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1"
        >
          <WatchList />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1"
        >
          <Positions />
        </motion.div>
      </div>
    </motion.div>
  );
} 