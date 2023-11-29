import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [mySelectedYear, setSelectedYear] = useState("2019");
  let infoText = "2020, 2021, & 2022";
  if (mySelectedYear === "2020") {
    infoText = "2019,2021, & 2022";
  } else if (mySelectedYear === "2021") {
    infoText = "2019,2020, & 2022";
  } else if (mySelectedYear === "2022") {
    infoText = "2019,2020, & 2021";
  }
  const getData = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((filterExpense) => {
    return mySelectedYear === filterExpense.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={mySelectedYear}
        onGetData={getData}
      ></ExpensesFilter>
      <p>The data for years {infoText} is hidden. </p>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};
export default Expenses;

{
  /* <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      /> */
}
