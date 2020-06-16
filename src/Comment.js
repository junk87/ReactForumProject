import React from "react";
function deleteComment(e) {
  console.log("刪除");
}
export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={deleteComment}>刪除</button>
        ID:{this.props.comment.userId}: {this.props.comment.content}
      </div>
    );
  }
}
