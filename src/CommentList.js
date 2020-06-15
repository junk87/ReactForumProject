import React from "react";
import Comment from "./Comment.js";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [
        { id: "甲", content: "test" },
        { id: "乙", content: "測試" },
        { id: "丙", content: "test" },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.commentList.map((comment) => {
          return <Comment keys={comment.id} comment={comment} />;
        })}
      </div>
    );
  }
}
