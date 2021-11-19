// data layer to prevent props drilling
// using React context API
// pretty much creating global variables
import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// How we use context api inside of a component
export const useStateValue = () => useContext(StateContext);