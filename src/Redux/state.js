let RenderEntireTree = () => { };

let store = {
    _state: {
        dialogsBlock: {
            dialogsPreview:
                [
                    { name: 'Alice Alisova', id: '1' },
                    { name: 'Sam Araratov', id: '2' },
                    { name: 'Pokrov Smallov', id: '3' },
                    { name: 'Brat Lublin', id: '4' },
                    { name: 'Red Boolev', id: '5' }
                ],
            dialogs: {
                dialog1: [

                ],
                dialog2: [

                ]
            }
        },
        postsBlock: {
            posts:
                [
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
                ],
            NewPostText: 'example of text for the new post'
        }
    },
    GetState() {
        return this._state;
    },
    subscribe(observer) {
        RenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.postsBlock.NewPostText = action.newPostText;
            RenderEntireTree(this._state);
        }
           else if (action.type === "ADD-POST") {
            let NewPostObject = {
                id: 5,
                postText: action.PostText,
                likesCount: 0,
                commentsBlock: {
                    commentsCount: 0,
                    comments: [
                    ]
                },
                repostsCount: 0,
                viewsCount: 0
            };
            this._state.postsBlock.posts.push(NewPostObject);
            this._state.postsBlock.NewPostText = '';
            RenderEntireTree(this._state);
           }
    }
}

export const AddPostActionCreator = (textOfNewPost) => {
    return {
        type: 'ADD-POST',
        PostText: textOfNewPost
    }
}

export const UpdateNewPostTextActionCreator = (newText) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        NewText: newText
    }
}

export default store;