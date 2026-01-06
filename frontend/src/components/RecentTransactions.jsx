// This component shows the list of recent expenses
// It receives data and functions from Dashboard via props
import React from "react";
const RecentTransactions = ({ expenses, onDelete }) => {
    console.log("Rt",expenses);
  return (
    // Card container
    <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col">

      
      {/* Card Title */}
      <h2 className="text-lg font-semibold mb-4">
        Recent Transactions
      </h2>

      {/* 
        If there are no expenses, show a message.
        Otherwise, show the table.
      */}
      {expenses.length === 0 ? (
        <p className="text-sm text-gray-500">
          No transactions yet
        </p>
      ) : (
        // Table for transactions
        <table className="w-full text-sm">
          
          {/* Table Head */}
            <thead>
                <tr className="text-left text-gray-500">
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th></th>
    
                </tr>
            </thead>


          {/* Table Body */}
          <tbody>
            {expenses.map((item) => (
              // Each expense is rendered as one row
              <tr key={item.id} className="border-t">
                
                {/* Expense title */}
                <td>{item.title}</td>

                {/* Expense amount */}
                <td>₹ {item.amount}</td>

                {/* Expense category */}
                <td>{item.category}</td>

                {/* Expense date */}
                <td>{item.date}</td>

                {/* Delete action */}
                <td>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecentTransactions;
