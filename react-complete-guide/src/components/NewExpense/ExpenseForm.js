import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // individual useStates
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Single useState Version
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Individual useState update
    setEnteredTitle(event.target.value);

    // Basic Single Use State Update
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // Safe Single Use State Update
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    // Individual useState update
    setEnteredAmount(event.target.value);

    // Basic Single Use State Update
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // Safe Single Use State Update
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    // Individual useState update
    setEnteredDate(event.target.value);

    // Basic Single Use State Update
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // Safe Single Use State Update
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier ==='title') {
  //     setEnteredTitle(value);
  //   } else if (identifier === 'date'){
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // const cancelHandler = () => {
  //   const expenseData = {
  //     title: "",
  //     amount: "",
  //     date: new Date(""),
  //   };

  //   props.onSaveExpenseData(expenseData);
  //   setEnteredTitle("");
  //   setEnteredAmount("");
  //   setEnteredDate("");
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            // onChange={(event) => inputChangeHandler('title', event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* <button onClick={cancelHandler}>Cancel</button> */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
