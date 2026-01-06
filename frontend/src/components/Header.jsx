import React from "react";
const Header = () => {
  return (
    <header className="bg-linear-to-r from-slate-900 to-slate-700 text-white rounded-xl mx-8 mt-4">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">ExpensifyX</h1>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
          <span className="text-sm">▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
