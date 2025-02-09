import { useContext, useState } from "react";
import Style from "./NewEntries.module.css";
import { NewEntriesContext } from "../context/NewEntriesContext";

export const NewEntries = () => {
  const [entryDetails, setEntryDetails] = useState({});

  const { dispatch } = useContext(NewEntriesContext);

  const changeHandler = (e) => {
    setEntryDetails((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setEntryDetails((preValues) => (preValues = ""));

    const randomID = crypto.randomUUID();

    dispatch({
      type: "SUBMIT",
      payload: {
        id: randomID,
        status: entryDetails.status === "income" ? "income" : "expense",
        amount: Number(entryDetails.amount),
        description: entryDetails.description,
      },
    });
  };

  return (
    <div className={Style.newEntriesContainer}>
      <div className={`${Style.inputContainer} ${Style.amount}`}>
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={entryDetails.amount || ""}
          onChange={changeHandler}
        />
        <div className={Style.selectContainer}>
          <select
            name="status"
            value={entryDetails.status || ""}
            onChange={changeHandler}
          >
            <option value=""></option>
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </div>
      </div>
      <div className={`${Style.inputContainer} ${Style.entry}`}>
        <input
          type="text"
          name="description"
          placeholder="Entry Description"
          value={entryDetails.description || ""}
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};
