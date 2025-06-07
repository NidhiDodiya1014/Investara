import React from 'react';
import VerticalGraph from '../charts/VerticalGraph';

export default function Holdings() {
  const data = {
    labels: ['Stocks', 'Mutual Funds', 'Bonds'],
    datasets: [
      {
        label: 'Holdings Distribution',
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-light text-gray-700 mb-4">Holdings Distribution</h3>
      <div className="w-full h-[400px]">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
} 