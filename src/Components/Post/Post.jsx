import React from "react";

import ProfileImage from './../../profileImage.png';

import s from './Post.module.css';

export default function Post(props) {
    return (
        <>
            <div className={s.postContainer}>
                <div className={s.postHeader}>
                    <div className={s.profileImage}>
                        <img src={ProfileImage} alt="Profile Image"></img>
                    </div>
                    <div className={s.postPublicationInfo}>
                        <span>Bob Bobov</span>
                        <span>today 12:36</span>
                    </div>
                    <span className={s.moreSettings}>&#183;&#183;&#183;</span>
                </div>

                <div className={s.postContent}>
                    {props.postText}
                </div>

                <div className={s.postStats}>
                    <div className={s.likeButtons}>
                        <div className={s.likes}>12</div>
                        <div className={s.comments}>5</div>
                        <div className={s.reposts}>3</div>
                    </div>
                    <div className={s.viewers}>
                        1.3k
                    </div>
                </div>
            </div>
        </>
    );
}