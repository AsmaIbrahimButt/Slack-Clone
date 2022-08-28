import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
export const StateProvider = ({ reducer, initilaState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initilaState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);