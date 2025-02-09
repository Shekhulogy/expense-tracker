import style from "./IncomeExpenses.module.css";
import { NewEntriesContext } from "../context/NewEntriesContext";
import { useContext } from "react";

export const IncomeExpenses = () => {
  const { newEntries, dispatch } = useContext(NewEntriesContext);

  const clickHandler = (event) => {
    const updatedEntries = newEntries.filter(
      (curEntry) => curEntry.id != event.target.id
    );

    dispatch({ type: "UPDATE", payload: updatedEntries });
  };

  return (
    <div className={style.incomeExpensesContainer}>
      <h3>Income-Expenses</h3>
      <ul>
        {newEntries &&
          newEntries.map((entry, index) => {
            return (
              <li
                key={index}
                className={
                  entry.status === "income"
                    ? style.incomeListItem
                    : style.expenseListItem
                }
              >
                <div>
                  <p>{entry.description}</p>
                  <p>{entry.amount}</p>
                </div>
                <span
                  className="material-symbols-outlined"
                  id={entry.id}
                  onClick={(event) => clickHandler(event)}
                >
                  cancel
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
