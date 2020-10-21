import {v4 as uuidv4} from 'uuid';
import {renderComments} from './comments';
import deletionHandler from './deleteComment';
import COMMENTS from './getComments';
import '../css/main.css';

let myStorage = window.localStorage;
// const COMMENTS = [
//     {id: "42071",author: "Ankit", likes: 3, comment_text: "My last comment", children:[{},{},{}]},
//     {id: "42070",author: "Ankit", likes: 0, comment_text: "My third comment", children:[{},{},{}]},
//     {id: "42069",author: "Ankit", likes: 1, comment_text: "My second comment", children:[{},{},{}]},
//     {id: "10069",author: "Ankit", likes: 2, comment_text: "My first comment", children:[{},{},{}]},
// ];
// shape  -->  {author: "Ankit", comment_text: "My first comment", children:[]}

// Load all comments on window load
window.onload = () => {renderComments()};

// ---- ADD A NEW COMMENT ----
const commentBox = document.querySelector('.comment-box');

// Get comments section
const commentsSection = document.querySelector('.comments-section');

// Handler to add comment
const commentAddHandler = (event) => {
    event.preventDefault();
    const commentBox_text = document.querySelector('.comment_text');
    const val = commentBox_text.value;
    // console.log(`adding val: ${val}`);
    const commentID = uuidv4();
    COMMENTS.unshift({
        id: commentID,
        author: "Bojack",
        comment_text: val,
        likes: 0,
        children: [],
    });
    const comment = document.createElement('div');
    comment.className = 'single-comment';
    comment.id = commentID;
    comment.innerHTML = `<p>${'Bojack'}: ${val}</p>
                        <span>${0}<button>Like</button></span>
                        <span>${0}<button>Comment</button></span>`;
    var delButton = document.createElement('button');
    delButton.innerText = 'Delete';
    delButton.className = 'comment_delete';
    delButton.addEventListener('click', deletionHandler);
    comment.appendChild(delButton);
    commentsSection.prepend(comment);
    console.log(comment);
    myStorage.setItem('comments', JSON.stringify(COMMENTS));
    commentBox.reset();
}

// Adding a new comment
commentBox.addEventListener('submit', commentAddHandler);
