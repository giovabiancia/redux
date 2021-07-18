import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, combineReducer, applyMiddleware } from "redux";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import allReducer from "./reducer/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// STORE ---> contiene tutto lo stato dell' app

// ACTION ---> Descrive cosa vuoi fare ( incrementare di 1) è una funzione che return un oggetto

/* const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
}; */

// REDUCER ---> Che azione hai selezionato? ---> ok cambio lo stato

/* const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
 */

// Mostro lo store in coonsole
/* store.subscribe(() => console.log(store.getState())); */

// DISPATCH ---> Invia l' azione al reducer
/* store.dispatch(increment()); */

let store = createStore(allReducer, applyMiddleware(thunk)); // dobbiamo passare allo store tutti i reducer ( che sono quelli che cambiano lo stato )
// per passare tutti i reducer insieme deve usere combineReducer

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
