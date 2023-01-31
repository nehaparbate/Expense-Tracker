import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [fitleredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter( expense => {
    return expense.date.getFullYear().toString() === fitleredYear;
  });

  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter selected = { fitleredYear } onChangeFilter = {filterChangeHandler}></ExpenseFilter>
    <ExpensesList items = {filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
