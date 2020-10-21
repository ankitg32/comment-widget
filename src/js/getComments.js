const COMMENTS = [
    {id: "42071",author: "Ankit", likes: 3, comment_text: "My last comment", children:[{},{},{}]},
    {id: "42070",author: "Ankit", likes: 0, comment_text: "My third comment", children:[{},{},{}]},
    {id: "42069",author: "Ankit", likes: 1, comment_text: "My second comment", children:[{},{},{}]},
    {id: "10069",author: "Ankit", likes: 2, comment_text: "My first comment", children:[{},{},{}]},
];

const getComments = () => {return COMMENTS;}

const deleteComment = (commentId) => {
    if(commentId){
        const removed = COMMENTS.splice(
            COMMENTS.findIndex(comment => comment.id === commentId)
            , 1);
            console.log(`COMMENT deleted: `);
            console.log(removed);
    }
}

export {deleteComment};
export default COMMENTS;