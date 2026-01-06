import React from "react";
import { useState } from "react";

const AddExpense = ({onAddExpense}) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, amount, category, date } = formData;
    if (!title || !amount || Number(amount) <= 0) {
     alert("Please enter a valid positive amount");
  return;
}


  // 👇 THIS LINE WAS MISSING
     onAddExpense({
    ...formData,
    amount: Number(amount), // 🔥 THIS FIX
  });
    console.log("Add expense clicked");
    console.log("Form Data:", formData);


    setFormData({
        title: "",
        amount: "",
        category: "Food",
        date: "",
    });
    };


  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Add Expense</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Others</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
