import React from "react";

import s from './Profile.module.css';
import ProfileTopHeader from "./ProfileTopHeader/ProfileTopHeader";
import NewPost from "./NewPost/NewPost";
import Post from "../Post/Post";

export default function Profile() {

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



    return (
        <>
            <ProfileTopHeader />
            <div className={s.profileMainContent}>
                <NewPost />
                <div className={s.postBlock}>
                    {posts.map((el) => (<Post postText={el.postText} likesCount={el.likesCount} commentsBlock={el.commentsBlock} repostsCount={el.repostsCount} viewsCount={el.viewsCount}/>))}
                </div>
            </div>
        </>
    );
}
