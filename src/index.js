import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import store from "./redux/state"
import App from "./App";

let _callSubscriber = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           addPost={store.addPost.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}
           addMessage={store.addMessage.bind(store)}
           updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

_callSubscriber(store.getState());
store.subscribe(_callSubscriber);

reportWebVitals();
