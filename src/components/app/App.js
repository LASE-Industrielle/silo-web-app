import React from 'react';
import AppRouter from "../navigation/Router";
import {mainReducer} from "../../reducers/Reducer";
import { StateProvider, initialState } from '../../context/StateContext';



const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <AppRouter />
    </StateProvider>
  );
}

export default App;
