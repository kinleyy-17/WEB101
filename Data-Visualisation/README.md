# 📊 Sales Analytics Dashboard

A data visualization analytics dashboard built with **React**, **Recharts**, and **react-chartjs-2**, developed as part of a practical worksheet on implementing charting libraries.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Chart Components](#chart-components)
- [Data Structure](#data-structure)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)
- [References](#references)

---

## Overview

This project demonstrates how to integrate multiple charting libraries into a single React application to build a fully responsive analytics dashboard. It covers four chart types — Line, Pie, Bar, and Area — each powered by real sales data.

---

## Features

- 📈 **Monthly Sales Line Chart** — tracks sales, profit, and targets over time
- 🥧 **Product Category Pie Chart** — shows distribution of product sales by category
- 📊 **Customer Acquisition Bar Chart** — compares new vs. returning customers (stacked)
- 🌊 **Weekly Visitors Area Chart** — visualizes weekly traffic with filled area
- 📱 Fully **responsive** layout using CSS Grid
- 🎨 Clean, card-based dashboard UI
- 🔍 Interactive **tooltips** and **legends** on all charts

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React (Vite) | Frontend framework |
| Recharts | Line Chart & Pie Chart |
| Chart.js + react-chartjs-2 | Bar Chart & Area Chart |
| date-fns | Date formatting for chart labels |
| CSS Grid | Responsive dashboard layout |

---

## Project Structure

```
Data-Visualisation/
├── public/
├── src/
│   ├── components/
│   │   ├── MonthlySalesChart.jsx       # Line Chart (Recharts)
│   │   ├── ProductCategoryChart.jsx    # Pie Chart (Recharts)
│   │   ├── CustomerAcquisitionChart.jsx # Bar Chart (react-chartjs-2)
│   │   └── WeeklyVisitorsChart.jsx     # Area Chart (react-chartjs-2)
│   ├── data/
│   │   └── salesData.js                # All mock data exports
│   ├── App.jsx                         # Main dashboard layout
│   ├── App.css                         # Dashboard styling
│   └── main.jsx                        # App entry point
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- npm (comes with Node.js)

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/syangche/Data-Visualisation.git
cd Data-Visualisation
```

**2. Install base dependencies:**

```bash
npm install
```

**3. Install charting libraries:**

```bash
npm install recharts chart.js react-chartjs-2 date-fns
```

**4. Start the development server:**

```bash
npm run dev
```

**5. Open your browser and visit:**

```
http://localhost:5173
```

---

## Chart Components

### 1. `MonthlySalesChart.jsx` — Line Chart (Recharts)

Displays monthly **Sales**, **Profit**, and **Target** as three lines over the course of the year.

- Uses `ResponsiveContainer` for full-width responsiveness
- Dashed line for the Target reference
- Tooltip formats values as currency (`$`)

### 2. `ProductCategoryChart.jsx` — Pie Chart (Recharts)

Shows the **percentage distribution** of product categories.

- Each slice uses a distinct color from a predefined palette
- Labels show category name and percentage directly on the chart
- Tooltip shows exact percentage value on hover

### 3. `CustomerAcquisitionChart.jsx` — Stacked Bar Chart (react-chartjs-2)

Compares **New Customers** vs **Returning Customers** month by month.

- Bars are stacked to show total customer volume
- Date labels formatted using `date-fns` (`MMM yyyy`)
- ChartJS components manually registered for optimal bundle size

### 4. `WeeklyVisitorsChart.jsx` — Area Chart (react-chartjs-2)

Visualizes **weekly visitor counts** with a filled area below the line.

- `fill: true` creates the area effect
- Smooth curve with `tension: 0.4`
- Custom tooltip callback formats numbers with locale separators

---

## Data Structure

All data is stored in `src/data/salesData.js`. The expected shapes are:

```js
// monthlySales — used by MonthlySalesChart
{ month: 'Jan', sales: 4000, profit: 2400, target: 4500 }

// productSales — used by ProductCategoryChart
{ name: 'Electronics', value: 35 }

// customerData — used by CustomerAcquisitionChart
{ date: '2024-01-01', newCustomers: 120, returningCustomers: 80 }

// weeklyVisitors — used by WeeklyVisitorsChart
{ week: 1, visitors: 3200 }
```

---

## Conclusion

This practical demonstrated how to build a multi-chart analytics dashboard in React using two industry-standard libraries — **Recharts** and **react-chartjs-2**. Key skills developed include:

- Setting up and registering Chart.js components
- Using Recharts' declarative JSX-based API
- Transforming raw data for chart consumption
- Building a responsive grid-based dashboard layout
- Formatting tooltips and labels for better readability

Recharts offers a more React-native declarative experience, while Chart.js provides finer control over chart behavior. Both are production-ready and complement each other well in the same project.

---

## References

1. Recharts Official Documentation — https://recharts.org/en-US/
2. Chart.js Official Documentation — https://www.chartjs.org/docs/latest/
3. react-chartjs-2 Documentation — https://react-chartjs-2.js.org/
4. date-fns Documentation — https://date-fns.org/docs/Getting-Started
5. React Official Documentation — https://react.dev/reference/react
6. Vite — React Project Setup — https://vitejs.dev/guide/
7. MDN Web Docs — CSS Grid Layout — https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
8. Base Project Repository — https://github.com/syangche/Data-Visualisation.git
9. Nussbaumer Knaflic, C. (2015). *Storytelling with Data.* Wiley.
10. Holtz, Y. (2018). *The Data Visualisation Catalogue.* https://datavizcatalogue.com/

---

> **Practical 7 — Data Visualization | Implementing Charting Libraries for Analytics**