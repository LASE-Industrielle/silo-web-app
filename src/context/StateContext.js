import React, { useContext, useReducer, createContext } from "react";

const initialState = {
  auth: {
    token: "",
    errorMessage: "",
    loading: false
  },
  silos: {
    data: [],
    errorMessage: "",
    loading: false
  },
  notifications: {
    data: [],
    errorMessage: "",
    loading: false
  },
  measurements: {
    data: [],
    errorMessage: "",
    loading: false
  }
};

export const StateContext = createContext("");

export const StateProvider = ({ reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);
