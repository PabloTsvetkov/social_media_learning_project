import React from "react";

import ImageIcon from './../../../image_icon.svg';
import ProfileImage from './../../../profileImage.png';

import s from './NewPost.module.css';

import { MdAddAPhoto } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { CiText } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";

export default function NewPost() {
    return (
        <>
            <div className={s.newPostContainer}>
                <div className={s.writingPost}>
                    <div className={s.smallPorfileImage}><img src={ProfileImage} alt="Porfile image"></img></div>
                    <div className={s.inputContainer}><input placeholder="What's new"></input></div>
                </div>
                <div className={s.visibilitySettings}>
                    <span className={s.personVisibility}>Shows to everyone ▼</span>
                    <span className={s.postDate}>Now ▼</span>
                </div>
                <div className={s.mainSettings}>
                    <span className={s.icon}><MdAddAPhoto /></span>
                    <span className={s.icon}><FaVideo /></span>
                    <span className={s.icon}><IoIosMusicalNotes /></span>
                    <span className={s.icon}><CiText /></span>
                    <span className={s.moreButton}>More▼</span>
                    <span className={s.settingsIcon}><IoSettingsSharp /></span>
                    <div className={s.sendButtonContainer}><button>Send</button></div>
                </div>
            </div>
        </>
    );
}