import COMMENTS from './getComments';
import {deleteComment} from './getComments';

// ---- DELETE A COMMENT ----
const deletionHandler = (event) => {
    const commentId = event.target.parentNode.id;
    const parentDiv = document.getElementById(event.target.parentNode.id);
    parentDiv.remove();
    console.log(`deleting COMMENT via deletionHandler: ${commentId}`);
    deleteComment(commentId);
}

export default deletionHandler;