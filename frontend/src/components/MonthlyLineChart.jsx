import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MonthlyLineChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-full flex flex-col">
      <h2 className="text-sm font-semibold mb-2">
        Monthly Trend
      </h2>

      <div className="flex-1 min-h-[180px]">
        {data.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-500">
            No monthly data
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default MonthlyLineChart;
