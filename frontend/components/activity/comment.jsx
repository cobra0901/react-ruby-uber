import React from "react";
import { withRouter } from "react-router-dom";
const Comment = props => {
  return (
    <div className="comment-cont">
      <div className="commenter-photo-cont">
        <img
          src={props.comment.author_photo}
          className="commenter-photo"
          onClick={() =>
            props.history.push(`/users/${props.comment.comment.author_id}`)
          }
        />
        <div className="commenter-name-and-such">
          <div>{props.comment.author_name}</div>
          <div className="created">{props.comment.created} ago</div>
        </div>
      </div>
      <div className="comment-content">
        <div>{props.comment.comment.content}</div>
      </div>
    </div>
  );
};

export default withRouter(Comment);
