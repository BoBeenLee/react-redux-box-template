import React, { Component, ReactFragment } from "react";
import { connectStore } from "redux-box";
import { module as counterModule } from "../ducks/counter";

@connectStore({
  counter: counterModule
})
class Counter extends Component {
  componentDidMount() {
    const { counter } = this.props;
    counter.fetchCounter();
  }

  render() {
    const { counter } = this.props;
    return (
      <React.Fragment>
        <button onClick={counter.plusCounter}>+</button>
        {counter.counter}
        <button onClick={counter.minusCounter}>-</button>
      </React.Fragment>
    );
  }
}

export default Counter;
