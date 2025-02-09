import { TotalIncomeExpenses } from "./TotalIncomeExpenses";
import Style from "./Balance.module.css";
import { NewEntriesContext } from "../context/NewEntriesContext";
import { useContext } from "react";

export const Balance = () => {
  const { newEntries } = useContext(NewEntriesContext);

  let totalBalance = 0;
  newEntries.map((entry) => {
    entry.status === "income"
      ? (totalBalance += entry.amount)
      : (totalBalance -= entry.amount);
  });

  return (
    <div className={Style.moneyContainer}>
      <div className={Style.balanceContainer} id="balance">
        <h1>Balance</h1>
        <p>{`₹ ${totalBalance}`}</p>
      </div>
      <TotalIncomeExpenses />
    </div>
  );
};
