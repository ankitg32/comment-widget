import deletionHandler from './deleteComment';
import COMMENTS from './getComments';

// ---- DISPLAY EXISTING COMMENTS ----
const commentsSection = document.querySelector('.comments-section');

// decide whether to render all comments or only the top 3
const getInitialRenderCount = (COMMENTS) => {
    return COMMENTS.length > 3 ? 3 : COMMENTS.length;
}

// function to render given number of comments
const renderGivenCountOfComments = (COMMENTS, start, end) => {
    console.log('rendering comments:');
    console.log(COMMENTS);
    COMMENTS.forEach((element, index) => {
        if(index>= start && index<end){
            var comment = document.createElement('div');
            comment.className='single-comment';
            comment.id= element.id;
            comment.innerHTML = `<p>${element.author}: ${element.comment_text}</p>
            <span>${element.likes}<button>Like</button></span>
            <span>${element.children.length}<button>Comment</button></span>`;
            var delButton = document.createElement('button');
            delButton.innerText = 'Delete';
            delButton.className = 'comment_delete';
            delButton.addEventListener('click', deletionHandler);
            comment.appendChild(delButton);
            commentsSection.append(comment);
            console.log(comment);
        }
    });
    const show_hide_comments = document.createElement('button');
    let all_rendered_flag = end >= COMMENTS.length ? true : false;
    show_hide_comments.innerHTML = all_rendered_flag ? 'show less' : '..more comments';
    show_hide_comments.className = 'more-comments';
    const current_COMMENTS_length = COMMENTS.length;
    show_hide_comments.addEventListener('click', () => {
        show_hide_comments.remove();
        console.log(`rendering comments happened with COMMENTS.length= ${COMMENTS.length} & all_rendered_flag=${all_rendered_flag}`);
        console.log(`rendering with current_COMMENTS_length = ${current_COMMENTS_length} start = ${COMMENTS.length - current_COMMENTS_length + end} and end = ${COMMENTS.length - current_COMMENTS_length + end + 5}`);
        all_rendered_flag ? renderComments(COMMENTS) : renderGivenCountOfComments(COMMENTS, COMMENTS.length - current_COMMENTS_length + end, COMMENTS.length - current_COMMENTS_length + end + 5);
    });
    const post = document.querySelector('.post');
    post.appendChild(show_hide_comments);
}

// parent function to render comments
export const renderComments= () => {
    commentsSection.innerHTML = "";
    const render_count = getInitialRenderCount(COMMENTS);
    console.log(`render_count = ${render_count}`);
    //first render only 3 comments, at most
    renderGivenCountOfComments(COMMENTS, 0, render_count);
    // console.log(myStorage.getItem('comments'));
}