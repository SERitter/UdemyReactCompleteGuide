import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [expenseItems, setExpenseItems] = useState(props.items);

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    // setExpenseItems(props.items.filter(item => item.date.getFullYear() == selectedYear));
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={selectYearHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
