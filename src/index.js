import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import App from "./App";
import StoreContext from "./StoreContext";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});

reportWebVitals();
