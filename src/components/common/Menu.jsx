import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

export default function Menu() {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4">
        <Title />
      </div>
      <Link to="/" className="text-gray-600 hover:text-gray-900">Summary</Link>
      <Link to="/orders" className="text-gray-600 hover:text-gray-900">Orders</Link>
      <Link to="/holdings" className="text-gray-600 hover:text-gray-900">Holdings</Link>
      <Link to="/positions" className="text-gray-600 hover:text-gray-900">Positions</Link>
      <Link to="/funds" className="text-gray-600 hover:text-gray-900">Funds</Link>
      <Link to="/apps" className="text-gray-600 hover:text-gray-900">Apps</Link>
    </div>
  );
} 