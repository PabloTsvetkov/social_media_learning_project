import React from "react";

import s from './DialogPreview.module.css';
import ProfileImage from './../../../profileImage.png';

import { Link } from 'react-router-dom';

export default function DialogPreview({ name = "Bob Bobov", message = "Some message", id = "-1" }) {
    let path = `/dialogs/${id}`;
    return (
        <>
            <Link to={path}>
                <div className={s.dialogPreview}>
                    <div className={s.imageContainer}><img src={ProfileImage}></img></div>
                    <div className={s.dialogInfo}>
                        <div className={s.profileName}>{name}</div>
                        <div className={s.message}>{message}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}