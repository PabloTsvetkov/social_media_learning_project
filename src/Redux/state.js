// let dialogsPreview = [
//     { name: 'Alice Alisova', id: '1' },
//     { name: 'Sam Araratov', id: '2' },
//     { name: 'Pokrov Smallov', id: '3' },
//     { name: 'Brat Lublin', id: '4' },
//     { name: 'Red Boolev', id: '5' },
// ];

// let posts = [
//     {
//         id: 1,
//         postText: "Here is some post",
//         likesCount: 12,
//         commentsBlock: {
//             commentsCount: 3,
//             comments: [
//                 {
//                     id: 1,
//                     commentText: "Interesting post!"
//                 },
//                 {
//                     id: 2,
//                     commentText: "Yeah Yeah Yeah"
//                 },
//                 {
//                     id: 3,
//                     commentText: "Scrjet"
//                 }
//             ]
//         },
//         repostsCount: 3,
//         viewsCount: 132
//     },
//     {
//         id: 2,
//         postText: "Here is another post",
//         likesCount: 25,
//         commentsBlock: {
//             commentsCount: 2,
//             comments: [
//                 {
//                     id: 1,
//                     commentText: "Interesting post!"
//                 },
//                 {
//                     id: 2,
//                     commentText: "Yeah Yeah Yeah"
//                 }
//             ]
//         },
//         repostsCount: 5,
//         viewsCount: 210
//     },
//     {
//         id: 3,
//         postText: "Amazing post",
//         likesCount: 47,
//         commentsBlock: {
//             commentsCount: 1,
//             comments: [
//                 {
//                     id: 3,
//                     commentText: "Great content, keep it up!"
//                 }
//             ]
//         },
//         repostsCount: 8,
//         viewsCount: 350
//     }
// ]
let state = {
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
            ]
    }
}

export default state;