import React from "react";

const Hotdeals = ({ hotdeals }) => {
  return (
    <div>
      {hotdeals.map((deal) => {
        return (
          <div key={deal.id}>
            {deal.SoftName}
            {deal.BeforeCost}
            {deal.AfterCost}
          </div>
        );
      })}
    </div>
  );
};

export default Hotdeals;
