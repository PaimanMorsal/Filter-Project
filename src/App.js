import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense";
import WarningButton from "./Components/Expenses/WarningButton";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "HP Printer",
    amount: 117.23,
    date: new Date(2021, 3, 11),
  },
  { id: "e2", title: "Fridge", amount: 899.99, date: new Date(2022, 2, 6) },
  {
    id: "e3",
    title: "Pack of Chairs",
    amount: 313.12,
    date: new Date(2021, 12, 11),
  },
  {
    id: "e4",
    title: "Personal Computer (Dell)",
    amount: 1250,
    date: new Date(2021, 2, 14),
  },
];
const App = () => {
  const [expenses, setNewExpenses] = useState(INITIAL_EXPENSES);
  const saveNewData = (newExpense) => {
    setNewExpenses([newExpense, ...expenses]);
  };
  return (
    <div>
      <NewExpense onSaveNewExpenseData={saveNewData}></NewExpense>
      <Expenses items={expenses} />
      <WarningButton />
    </div>
  );
};
export default App;
