import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsPreview = [
  { name: 'Alice Alisova', id: '1' },
  { name: 'Sam Araratov', id: '2' },
  { name: 'Pokrov Smallov', id: '3' },
  { name: 'Brat Lublin', id: '4' },
  { name: 'Red Boolev', id: '5' },
];

let posts = [
  {
    id: 1,
    postText: "Here is some post",
    likesCount: 12,
    commentsBlock: {
      commentsCount: 3,
      comments: [
        {
          id: 1,
          commentText: "Interesting post!"
        },
        {
          id: 2,
          commentText: "Yeah Yeah Yeah"
        },
        {
          id: 3,
          commentText: "Scrjet"
        }
      ]
    },
    repostsCount: 3,
    viewsCount: 132
  },
  {
    id: 2,
    postText: "Here is another post",
    likesCount: 25,
    commentsBlock: {
      commentsCount: 2,
      comments: [
        {
          id: 1,
          commentText: "Interesting post!"
        },
        {
          id: 2,
          commentText: "Yeah Yeah Yeah"
        }
      ]
    },
    repostsCount: 5,
    viewsCount: 210
  },
  {
    id: 3,
    postText: "Amazing post",
    likesCount: 47,
    commentsBlock: {
      commentsCount: 1,
      comments: [
        {
          id: 3,
          commentText: "Great content, keep it up!"
        }
      ]
    },
    repostsCount: 8,
    viewsCount: 350
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsPreview={dialogsPreview} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
