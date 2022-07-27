import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, titleSeter] = useState("");
  const [amount, amountSeter] = useState("");
  const [date, dateSeter] = useState("");

  const submitForm = (event) => {
    event.preventDefault(); // stop submition time refresh
   // console.log(amount);
    //console.log(date);
    //console.log(title);
    const expense = {
      title: title,
      date: Date(date),
      amount: amount,
    };
    props.onSubmitForm(expense);
  };
  const titleTake = (value) => {
    titleSeter(value.target.value);
  //  console.log(amount);
  };

  const expenseAmountTake = (value) => {
    amountSeter(value.target.value);
   // console.log(amount);
  };

  const expenseDateTake = (value) => {
    dateSeter(value.target.value);
   // console.log(date);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-item__controls">
        <div className="form-item__control">
          <label>Expense Title</label>
          <input type="text" onChange={titleTake} />
        </div>

        <div className="form-item__control">
          <label>Expense Amount</label>
          <input type="number" min="1" step="1" onChange={expenseAmountTake} />
        </div>

        <div className="form-item__control">
          <label>Date</label>
          <input type="date" onChange={expenseDateTake} />
        </div>

        <div className="form-item__control">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
