import { NewEntriesContext } from "./NewEntriesContext";
import { useReducer } from "react";

const initialNewEntries = [];

const newEntriesReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return [
        ...state,
        {
          id: action.payload.id,
          status: action.payload.status,
          amount: action.payload.amount,
          description: action.payload.description,
        },
      ];
      break;
    case "UPDATE":
      return action.payload;
      break;

    default:
      break;
  }
};

export const NewEntriesContextProvider = ({ children }) => {
  const [newEntries, dispatch] = useReducer(
    newEntriesReducer,
    initialNewEntries
  );

  return (
    <NewEntriesContext.Provider value={{ newEntries, dispatch }}>
      {children}
    </NewEntriesContext.Provider>
  );
};
