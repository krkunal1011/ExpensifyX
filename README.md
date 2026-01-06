# ExpensifyX


ExpensifyX

ExpensifyX is a full-stack expense tracking application that helps users record daily expenses, categorize spending, and visualize expense patterns through charts and summaries. The project focuses on clean frontend–backend separation and practical CRUD-based application design.

Features

Add, view, and delete expenses

Categorize expenses (Food, Travel, Others, etc.)

Monthly budget overview

Total spent and remaining balance calculation

Visual analytics:

Category-wise spending (pie chart)

Weekly spending (bar chart)

Monthly trend (line chart)

Tech Stack
Frontend

React (Vite)

JavaScript (ES6+)

HTML5, CSS3

Axios

Chart libraries for data visualization

Backend

Node.js

Express.js

RESTful APIs

Environment-based configuration using .env

#### Project Structure

```text
ExpensifyX/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```
How It Works

The frontend communicates with the backend using REST APIs.

Expenses are created, fetched, and deleted via API endpoints.

The frontend processes the data to compute totals and render charts.

Environment variables are used to manage backend configuration securely.