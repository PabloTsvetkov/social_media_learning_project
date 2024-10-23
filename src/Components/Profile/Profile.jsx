import React from "react";

import s from './Profile.module.css';
import ProfileTopHeader from "./ProfileTopHeader/ProfileTopHeader";
import NewPost from "./NewPost/NewPost";
import Post from "../Post/Post";

export default function Profile(props) {
    return (
        <>
            <ProfileTopHeader />
            <div className={s.profileMainContent}>
                <NewPost dispatch={props.dispatch} NewPostText={props.postsBlock.NewPostText} />
                <div className={s.postBlock}>
                    {props.postsBlock.posts.map((el) => (<Post postText={el.postText} likesCount={el.likesCount} commentsBlock={el.commentsBlock} repostsCount={el.repostsCount} viewsCount={el.viewsCount}/>))}
                </div>
            </div>
        </>
    );
}
