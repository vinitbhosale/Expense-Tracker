import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  // ONE WAY TO CHANGE THE STATE BY WRITING MULTI STATE APPROACH
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // ALTERNATIVE TO USE ONLY ONE USESTATE()
  /**
    const [formDate, setFormData] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });*/

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // ALTERNATIVE APPROACH
    /** 
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // ALTERNATIVE APPROACH
    /**
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
    */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // ALTERNATIVE APPROACH
    /** 
    setFormData((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
    */
  };

  const submitHandler = (event) => {
    // to stay on the same page when request is send
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // COMMUNICATING FROM CHILDREN TO PARENT i.e WE ARE PASSING THE FORM VALUE FROM NewExpense -> NEWExpense -> App FILE
    props.onSaveExpenseData(expenseData);
    // SETTING THE INPUT VALUES TO EMPTY AFTER WE SUBMIT THE FORM
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.001"
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
