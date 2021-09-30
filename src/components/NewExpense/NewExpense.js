import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Passing the expense to the App class
    props.onAddExpense(expenseData);

    // Closing the expense form after submiting the expense
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* IF isEditing is FALSE i.e NOT TRUE THEN it will show button */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* IF isEditing is TRUE it will show the form to add expense*/}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
