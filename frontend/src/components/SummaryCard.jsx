import React from "react";
const SummaryCard = ({ title, amount, subtitle }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-2">₹ {amount}</h2>
      {subtitle && (
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default SummaryCard;
