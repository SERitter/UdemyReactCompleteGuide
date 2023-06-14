import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={selectYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
