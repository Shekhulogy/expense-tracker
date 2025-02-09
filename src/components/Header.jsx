import Style from "./Header.module.css";

export const Header = () => {
  return (
    <div className={Style.header}>
      <span className="material-symbols-outlined">chevron_right</span>
      <h4>Expense Tracker</h4>
    </div>
  );
};
