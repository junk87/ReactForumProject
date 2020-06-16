import React from "react";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id}>
        <button onClick={this.props.handleDelete}>刪除</button>
        ID:{this.props.comment.userId}: {this.props.comment.content}
      </div>
    );
  }
}
