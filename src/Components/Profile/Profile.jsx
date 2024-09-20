import React from "react";

import s from './Profile.module.css';
import ProfileTopHeader from "./ProfileTopHeader/ProfileTopHeader";
import NewPost from "./NewPost/NewPost";
import Post from "../Post/Post";

export default function Profile() {
    return (
        <>
            <ProfileTopHeader />
            <div className={s.profileMainContent}>
                <NewPost />
                <div className={s.postBlock}>
                    <Post postText="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                    <Post postText="qwertyuio" />
                    <Post postText="hgfds" />
                    <Post postText="zxcvbnm" />
                </div>
            </div>
        </>
    );
}