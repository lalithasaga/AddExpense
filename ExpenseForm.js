// ExpenseForm.js
/*import React, { useRef } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const expenseInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredExpense = expenseInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;

    const expenseData = {
      expense: enteredExpense,
      description: enteredDescription,
      category: enteredCategory,
    };

    onAddExpense(expenseData); // Call the onAddExpense function and pass the expenseData

    expenseInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    categoryInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>

    </form>
  );
};

export default ExpenseForm; */

import React, { useRef, useState } from 'react';
import ExpenseInput from './ExpenseInput';
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [expenses, setExpenses] = useState([]);

  const expenseInputRef = useRef();
  const descriptionInputRef = useRef();
  const categoryInputRef = useRef();

  const addExpenseHandler = (event) => {
    event.preventDefault();

    const enteredExpense = expenseInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;

    const expenseData = {
      expense: enteredExpense,
      description: enteredDescription,
      category: enteredCategory,
    };

    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);

    expenseInputRef.current.value = '';
    descriptionInputRef.current.value = '';
    categoryInputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={addExpenseHandler}>
        <ExpenseInput
          id="expense"
          label="Expense"
          type="text"
          required
          inputRef={expenseInputRef}
        />
        <ExpenseInput
          id="description"
          label="Description"
          type="text"
          required
          inputRef={descriptionInputRef}
        />
        <div className="form-group">
          <label className="label" htmlFor="category">
            Category
          </label>
          <select className="input" id="category" required ref={categoryInputRef}>
            <option value="">Select a category</option>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>
      
<div>
  <h2>Expenses</h2>
  {expenses.length === 0 && <p>No expenses added yet.</p>}
  {expenses.length > 0 && (
    <table className="expenses-table">
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.expense}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
</div>
  );
};

export default ExpenseForm;



