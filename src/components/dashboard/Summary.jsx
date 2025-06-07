import React from "react";

export default function Summary() {
  return (
    <>
      <div>
        <h6 className="text-lg font-light text-gray-700 mb-2">Hi, User!</h6>
        <hr className="border-none bg-gray-200 h-0.5 my-4" />
      </div>

      <div className="mb-4">
        <span className="flex items-center mb-2">
          <p className="text-lg font-light text-gray-700">Equity</p>
        </span>

        <div className="flex flex-col">
          <div className="first">
            <h3 className="text-2xl font-light text-gray-700">3.74k</h3>
            <p className="text-sm text-gray-400">Margin available</p>
          </div>
          <hr className="border-none bg-gray-200 h-0.5 my-4" />

          <div className="second">
            <p className="text-sm text-gray-400">
              Margins used <span className="text-gray-700">0</span>
            </p>
            <p className="text-sm text-gray-400">
              Opening balance <span className="text-gray-700">3.74k</span>
            </p>
          </div>
        </div>
        <hr className="border-none bg-gray-200 h-0.5 my-4" />
      </div>

      <div className="mb-4">
        <span className="flex items-center mb-2">
          <p className="text-lg font-light text-gray-700">Holdings (13)</p>
        </span>

        <div className="flex flex-col">
          <div className="first">
            <h3 className="text-2xl font-light text-green-500">
              1.55k <small className="text-sm">+5.20%</small>
            </h3>
            <p className="text-sm text-gray-400">P&L</p>
          </div>
          <hr className="border-none bg-gray-200 h-0.5 my-4" />

          <div className="second">
            <p className="text-sm text-gray-400">
              Current Value <span className="text-gray-700">31.43k</span>
            </p>
            <p className="text-sm text-gray-400">
              Investment <span className="text-gray-700">29.88k</span>
            </p>
          </div>
        </div>
        <hr className="border-none bg-gray-200 h-0.5 my-4" />
      </div>
    </>
  );
} 