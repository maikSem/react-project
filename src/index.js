import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Misha'},
  {id: 2, name: 'Alesya'},
  {id: 3, name: 'Ksenya'},
  {id: 4, name: 'Key'},
  {id: 5, name: 'Oleg'},
  {id: 6, name: 'Sergey'}
]

let messages = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yahoo'},
  {id: 4, message: 'Yo!'},
  {id: 5, message: 'Wheare you?'},
  {id: 6, message: 'Yo!'}
]

let posts = [
  {id: 1, post: 'This is my first post!', likesCount: 12},
  {id: 2, post: 'This is my second post', likesCount: 16},
  {id: 3, post: 'This is my last post', likesCount: 10}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
