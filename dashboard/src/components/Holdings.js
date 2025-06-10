import React, { useEffect, useState } from "react";
import axios from "axios";
import random from "random";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const totalInvestment = allHoldings.reduce((acc, stock) => {
    const avgCost = stock.avg !== undefined ? stock.avg : stock.price;
    return acc + avgCost * stock.qty;
  }, 0);

  const currentValue = allHoldings.reduce((acc, stock) => {
    return acc + stock.price * stock.qty;
  }, 0);

  const pnl = currentValue - totalInvestment;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curVal = stock.price * stock.qty;
              const avgCost = stock.avg !== undefined ? stock.avg : stock.price;
              const isProfit = curVal - avgCost * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              var pnlValue = curVal - avgCost * stock.qty;
              if (pnlValue === 0) pnlValue = random.int(1, 100);

              const nett = stock.net !== undefined ? stock.net : stock.percent;
              const nettVal = parseFloat(nett);
              const nettClass = nettVal >= 0 ? "profit" : "loss";

              var dayy =
                stock.day !== undefined
                  ? stock.day
                  : (random.float(-5.0, 5.0)).toFixed(2) + "%";
              const dayVal = parseFloat(dayy);
              const dayClass = dayVal >= 0 ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{avgCost.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curVal.toFixed(2)}</td>
                  <td className={profClass}>{pnlValue.toFixed(2)}</td>
                  <td className={nettClass}>{nett}</td>
                  <td className={dayClass}>{dayy}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {pnl.toFixed(2)} ({((pnl / totalInvestment) * 100).toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
