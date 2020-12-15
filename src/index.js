import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"
import App from "./App";

let _callSubscriber = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

_callSubscriber(store.getState());
store.subscribe(_callSubscriber);

reportWebVitals();
