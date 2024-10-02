import React from "react";

import s from './Profile.module.css';
import ProfileTopHeader from "./ProfileTopHeader/ProfileTopHeader";
import NewPost from "./NewPost/NewPost";
import Post from "../Post/Post";
import { AddPost } from "../../Redux/state";

export default function Profile(props) {
    return (
        <>
            <ProfileTopHeader />
            <div className={s.profileMainContent}>
                <NewPost />
                {AddPost('text post text')}
                <div className={s.postBlock}>
                    {props.posts.map((el) => (<Post postText={el.postText} likesCount={el.likesCount} commentsBlock={el.commentsBlock} repostsCount={el.repostsCount} viewsCount={el.viewsCount}/>))}
                </div>
            </div>
        </>
    );
}
