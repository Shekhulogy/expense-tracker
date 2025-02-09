import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Balance } from "./components/Balance";
import "./App.css";
import { NewEntries } from "./components/NewEntries";
import { NewEntriesContextProvider } from "./context/NewEntriesContextProvider";

export const App = () => {
  return (
    <div className="app">
      <NewEntriesContextProvider>
        <Header />
        <Balance />
        <NewEntries />
        <IncomeExpenses />
      </NewEntriesContextProvider>
    </div>
  );
};
