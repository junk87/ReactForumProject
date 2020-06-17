import React from "react";
export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newInput: "" };
  }

  render() {
    return (
      <div id={this.props.id}>
        <button onClick={this.props.handleDelete}>刪除</button>
        ID:{this.props.comment.userId}:
        <div
          id={"content" + this.props.id}
          onDoubleClick={this.props.changeToInput}
        >
          {this.props.comment.content}
        </div>
        <div id={"change" + this.props.id}></div>
      </div>
    );
  }
}
