import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f97316"];

const CategoryPieChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-[260px]">
      <h2 className="text-sm font-semibold mb-2">
        Spending by Category
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={70}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
              verticalAlign="vertical"
              align="center"
              iconType="circle"
            />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;
