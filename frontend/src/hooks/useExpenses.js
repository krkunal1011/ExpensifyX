import { useEffect, useState } from "react";
import api from "../services/api";

const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load expenses on mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error("Fetch expenses failed", err);
    } finally {
      setLoading(false);
    }
  };

  const addExpense = async (expense) => {
    try {
      const safeExpense = {
      ...expense,
      amount: Number(expense.amount), // 🔥 KEY LINE
    };

      const res = await api.post("/expenses", expense);
      setExpenses((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Add expense failed", err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      console.error("Delete expense failed", err);
    }
  };

  return { expenses, loading, addExpense, deleteExpense };
};

export default useExpenses;
