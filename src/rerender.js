import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AddPost, UpdateNewPostText } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} AddPost={AddPost} UpdateNewPostText={UpdateNewPostText} />
    </React.StrictMode>
  );
}

export default RenderEntireTree;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
