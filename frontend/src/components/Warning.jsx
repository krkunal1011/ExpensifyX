import React from "react";
const Warning = ({ monthlyBudget, amountSpent }) => {
  const isNearLimit = amountSpent >= monthlyBudget * 0.8;

  if (!isNearLimit) return null;

  return (
    <div className="mt-6 bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded-lg flex items-center gap-2 ">
      <span>⚠️</span>
      <p className="text-sm">
        You are reaching your monthly budget limit!
      </p>
    </div>
  );
};

export default Warning;
