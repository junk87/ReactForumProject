import React from "react";
export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button>刪除</button>
        ID:{this.props.comment.id}: {this.props.comment.content}
      </div>
    );
  }
}
