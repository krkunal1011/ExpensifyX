import React from "react";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import Warning from "../components/Warning";
import AddExpense from "../components/AddExpense";
import RecentTransactions from "../components/RecentTransactions";
import CategoryPieChart from "../components/CategoryPieChart";
import WeeklyBarChart from "../components/WeeklyBarChart";
import MonthlyLineChart from "../components/MonthlyLineChart";
import useExpenses from "../hooks/useExpenses";

const Dashboard = () => {
  // 1️⃣ Fetch expenses from custom hook
  const { expenses, loading, addExpense, deleteExpense } = useExpenses();

  // 2️⃣ Loading state
  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  // 3️⃣ Budget
  const monthlyBudget = 20000;

  // 4️⃣ Total spent (SAFE number conversion)
  const totalSpent = expenses.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  // 5️⃣ Remaining balance (never below 0)
  const remainingBalance = Math.max(
    monthlyBudget - totalSpent,
    0
  );

  // 6️⃣ Category totals (SAFE)
  const categoryTotals = expenses.reduce(
    (acc, item) => {
      const category = item.category?.trim();
      const amount = Number(item.amount || 0);

      if (category === "Food") acc.Food += amount;
      else if (category === "Travel") acc.Travel += amount;
      else if (category === "Others") acc.Others += amount;

      return acc;
    },
    { Food: 0, Travel: 0, Others: 0 }
  );

  const pieData = [
    { name: "Food", value: categoryTotals.Food },
    { name: "Travel", value: categoryTotals.Travel },
    { name: "Others", value: categoryTotals.Others },
  ];

  // 7️⃣ Weekly data (NO duplicate loop)
  const weeklyData = [
    { day: "Sun", amount: 0 },
    { day: "Mon", amount: 0 },
    { day: "Tue", amount: 0 },
    { day: "Wed", amount: 0 },
    { day: "Thu", amount: 0 },
    { day: "Fri", amount: 0 },
    { day: "Sat", amount: 0 },
  ];

  expenses.forEach((item) => {
    if (!item.date) return;

    const date = new Date(`${item.date}T00:00:00`);
    if (isNaN(date)) return;

    const dayIndex = date.getDay();
    weeklyData[dayIndex].amount += Number(item.amount || 0);
  });

  // 8️⃣ Monthly data
  const monthlyDataMap = {};

  expenses.forEach((item) => {
    if (!item.date) return;

    const date = new Date(`${item.date}T00:00:00`);
    if (isNaN(date)) return;

    const day = date.getDate();
    monthlyDataMap[day] =
      (monthlyDataMap[day] || 0) + Number(item.amount || 0);
  });

  const monthlyData = Object.keys(monthlyDataMap)
    .sort((a, b) => a - b)
    .map((day) => ({
      day,
      amount: monthlyDataMap[day],
    }));

  return (
    <>
      <Header />

      <main className="p-6 max-w-7xl mx-auto space-y-6">
        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard
            title="Total Balance"
            amount={remainingBalance}
            subtitle={`This Month Budget: ₹${monthlyBudget}`}
          />

          <SummaryCard
            title="Monthly Budget"
            amount={monthlyBudget}
          />

          <SummaryCard
            title="Amount Spent"
            amount={totalSpent}
          />

          <SummaryCard
            title="Remaining Balance"
            amount={remainingBalance}
            amountClass={
              remainingBalance <= 0
                ? "text-red-600"
                : "text-green-600"
            }
          />
        </div>

        {/* WARNING */}
        <Warning
          monthlyBudget={monthlyBudget}
          amountSpent={totalSpent}
        />

        {/* ADD EXPENSE + RECENT TRANSACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <AddExpense onAddExpense={addExpense} />

          <RecentTransactions
            expenses={expenses}
            onDelete={deleteExpense}
          />
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CategoryPieChart data={pieData} />
          <WeeklyBarChart data={weeklyData} />
          <MonthlyLineChart data={monthlyData} />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
