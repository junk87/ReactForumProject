import React from "react";
import CommentList from "./CommentList.js";
import ReactDOM from "react-dom";

export default class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [
        { userId: "甲", content: "test" },
        { userId: "乙", content: "測試" },
        { userId: "丙", content: "test" },
      ],
      newUserId: "",
      newContent: "",
      newInput: "",
    };
  }
  handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.parentNode.id);
    const newCommentList = this.state.commentList;
    newCommentList.splice(e.target.parentNode.id, 1);
    this.setState((state) => ({ commentList: newCommentList }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      commentList: state.commentList.concat([
        {
          userId: state.newUserId,
          content: state.newContent,
        },
      ]),
    }));
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //this.setState((state, e) => {});
  };
  handleUpdate = (e) => {
    var updateId = e.target.id;
    var newCommentList = this.state.commentList;
    newCommentList[e.target.parentNode.parentNode.id].content = e.target.value;
    this.setState(() => ({ commentList: newCommentList }));
    this.setState(() => ({ [updateId]: undefined }));
    ReactDOM.unmountComponentAtNode(e.target.parentNode);
    console.log(this.state);
  };
  inputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  changeToInput = (e) => {
    console.log(this.state);
    e.preventDefault();
    var changeId = e.target.parentNode.id;
    this.setState((state) => ({
      ["edit" + changeId]: "",
    }));
    ReactDOM.render(
      <input
        onChange={this.inputChange}
        value={this.state["edit" + changeId]}
        id={"edit" + changeId}
        onKeyPress={this.handleUpdate}
      />,
      document.getElementById("change" + changeId)
    );
  };
  render() {
    return (
      <div>
        <div id="article">
          忍者是個古老的職業 <br />
          據傳日本隱藏著許多忍者村
          <br />
          每個忍者村最強的領導可成為影 戰力非常高
          <br />
          殺人於無形
          <br />
          有這樣的特種部隊
          <br />
          為何二戰還會輸？
        </div>
        <br />
        <CommentList
          commentList={this.state.commentList}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          changeToInput={this.changeToInput}
        />
        <br />
        <form action="GET" onSubmit={this.handleSubmit}>
          ID:
          <input
            type="text"
            name="newUserId"
            value={this.state.newUserId}
            onChange={this.handleChange}
          />
          <div>
            Comment:
            <br />
            <textarea
              name="newContent"
              value={this.state.newContent}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">傳送</button>
        </form>
      </div>
    );
  }
}
