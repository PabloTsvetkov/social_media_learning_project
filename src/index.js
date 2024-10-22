import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import state, { AddPost, UpdateNewPostText, subscribe } from './Redux/state';
import store from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.GetState()} AddPost={store.AddPost.bind(store)} UpdateNewPostText={store.UpdateNewPostText.bind(store)} />
    </React.StrictMode>
  );
}

RenderEntireTree(store.GetState());

store.subscribe(RenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
