import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeeklyBarChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-full flex flex-col">
      <h2 className="text-sm font-semibold mb-2">
        Weekly Spending
      </h2>

      {/* KEY FIX */}
      <div className="flex-1 min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyBarChart;
