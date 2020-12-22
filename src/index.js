import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import App from "./App";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
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
