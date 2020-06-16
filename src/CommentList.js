import React from "react";
import Comment from "./Comment.js";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.commentList.map((comment) => {
          return <Comment key={comment.userId} comment={comment} />;
        })}
      </div>
    );
  }
}
