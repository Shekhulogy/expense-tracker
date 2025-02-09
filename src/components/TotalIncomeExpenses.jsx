import { useContext } from "react";
import Style from "./TotalIncomeExpenses.module.css";
import { NewEntriesContext } from "../context/NewEntriesContext";

export const TotalIncomeExpenses = () => {
  const { newEntries } = useContext(NewEntriesContext);

  let totalIncome = 0;
  let totalExpense = 0;

  newEntries.map((entry) => {
    entry.status === "income"
      ? (totalIncome += entry.amount)
      : (totalExpense += entry.amount);
  });

  return (
    <div className={Style.wrapper}>
      <div className={`${Style.container} ${Style.totalIncome}`}>
        <h3>Income</h3>
        <p>{`₹ ${totalIncome}`}</p>
      </div>
      <div className={`${Style.container} ${Style.totalExpenses}`}>
        <h3>Expenses</h3>
        <p>{`₹ ${totalExpense}`}</p>
      </div>
    </div>
  );
};
