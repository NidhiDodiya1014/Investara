import React from 'react';
import DoughnutChart from '../charts/DoughnoutChart';

export default function Funds() {
  const data = {
    labels: ['Available', 'Used'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-light text-gray-700 mb-4">Funds Distribution</h3>
      <div className="w-full h-[400px] flex justify-center">
        <div className="w-[300px] h-[300px]">
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
} 