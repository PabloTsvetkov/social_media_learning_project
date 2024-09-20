import React from "react";
import s from './Sidebar.module.css';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={s.linkList}>
      <Link to="/profile">
        <div className={s.listItem}>
          Profile
        </div>
      </Link>
      <Link to="/dialogues">
        <div className={s.listItem}>
          Messages
        </div>
      </Link>
      <Link to="/news">
        <div className={s.listItem}>
          News
        </div>
      </Link>
      <Link to="/music">
        <div className={s.listItem}>
          Music
        </div>
      </Link>
      <Link to="/settings">
        <div className={s.listItem}>
          Settings
        </div>
      </Link>
    </div>
  );
}