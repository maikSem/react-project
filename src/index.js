import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"
import {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import App from "./App";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();
