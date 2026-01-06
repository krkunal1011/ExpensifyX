const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// in-memory data
let expenses = [];

// test route
app.get("/", (req, res) => {
  res.send("Expense Tracker API running");
});

// get all expenses
app.get("/expenses", (req, res) => {
  res.json(expenses);
});

// add expense
app.post("/expenses", (req, res) => {
  const newExpense = {
    id: Date.now(),
    ...req.body,
  };

  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// delete expense
app.delete("/expenses/:id", (req, res) => {
  const id = Number(req.params.id);
  expenses = expenses.filter((item) => item.id !== id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
