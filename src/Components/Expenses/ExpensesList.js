import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
export default function ExpensesList(props) {
  let expensesData = <p>No data exist!</p>;
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Data not found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (expensesData = props.filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        )))
      }
    </ul>
  );
}
