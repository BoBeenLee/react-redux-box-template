import React, { Component } from "react";
import { connectStore } from "redux-box";
import { withStateHandlers } from "recompose";
import { module as memoModule } from "../ducks/memo";

const withStateMemo = withStateHandlers(
  props => ({
    title: "",
    content: ""
  }),
  {
    handleTitle: ({ title }) => e => ({
      title: e.target.value
    }),
    handleContent: ({ content }) => e => ({
      content: e.target.value
    })
  }
);

@connectStore({
  memo: memoModule
})
@withStateMemo
class AddMemo extends Component {
  componentDidMount() {}

  successCallback = () => {
    console.log("move AddMemo");
  };

  render() {
    const { title, content, handleTitle, handleContent, memo } = this.props;
    return (
      <div>
        <input
          onChange={handleTitle}
          value={title}
          type="text"
          placeholder="title"
        />
        <input
          onChange={handleContent}
          value={content}
          type="text"
          placeholder="content"
        />
        <input
          onClick={() => memo.addMemo(title, content, this.successCallback)}
          type="submit"
          value="addMemo"
        />
      </div>
    );
  }
}

export default AddMemo;
