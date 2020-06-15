import React from "react";
import CommentList from "./CommentList.js";
export default class Forum extends React.Component {
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
        <CommentList />
        <br />
        <form action="GET">
          ID:
          <input type="text" />
          <div>
            Comment:
            <br />
            <textarea />
          </div>
          <button type="submit">傳送</button>
        </form>
      </div>
    );
  }
}
