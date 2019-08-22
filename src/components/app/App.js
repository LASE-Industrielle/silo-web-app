import React from "react";
import AppRouter from "../navigation/Router";
import { mainReducer } from "../../reducers/Reducer";
import { StateProvider } from "../../context/StateContext";

const App = () => {
  return (
    <StateProvider reducer={mainReducer}>
      <AppRouter />
    </StateProvider>
  );
};

export default App;
