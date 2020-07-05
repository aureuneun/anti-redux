import React, { useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

const ToDosContext = React.createContext();

const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useContextState = () => {
  const { state } = useContext(ToDosContext);
  return state;
};

export const useContectDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};

export default ToDosProvider;
