import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [entredTitle, setTitle] = useState("");
  const [entredAmount, setAmount] = useState("");
  const [entredDate, setDate] = useState("");
  //   const handleTitleChange = (event) => {
  //     setTitle(event.target.value);
  //   };
  //   const handleAmountChange = (event) => {
  //     setAmount(event.target.value);
  //   };
  //   const handleDateChange = (event) => {
  //     setDate(event.target.value);
  //   };
  const handleInputChange = (identifire, value) => {
    if (identifire === "title") {
      setTitle(value);
      console.log(entredTitle);
    } else if (identifire === "amount") {
      setAmount(value);
      console.log(entredAmount);
    } else if (identifire === "date") {
      setDate(value);
      console.log(entredDate);
    }
  };

  const handleSubmitData = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmitData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => {
              handleInputChange("title", event.target.value);
            }}
            value={entredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              handleInputChange("amount", event.target.value);
            }}
            value={entredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {
              handleInputChange("date", event.target.value);
            }}
            value={entredDate}
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
}
