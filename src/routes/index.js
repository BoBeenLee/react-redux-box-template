import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../store";

import Counter from "./Counter";
import AddMemo from './AddMemo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={configureStore()}>
        <div>
          <AddMemo />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
