import React, { Component } from "react";
import { connectStore } from "redux-box";
import _ from "lodash";
import { module as memoModule } from "../ducks/counter";

@connectStore({
  memo: memoModule
})
class Memo extends Component {
  componentDidMount() {}

  render() {
    const { memo } = this.props;
    return (
      <div>
        <ul>
          {_.map(memo.memos, item => {
            return (
              <li key={item.id}>
                {item.title}
                <button onClick={() => memo.removeMemo(item.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Memo;
