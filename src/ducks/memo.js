// store/user.js
import { createSagas, createContainer } from "redux-box";
import { call } from "redux-saga/effects";
import _ from "lodash";

const types = {
  ADD_MEMO: "ADD_MEMO",
  REMOVE_MEMO: "REMOVE_MEMO"
};

const state = {
  memos: [
    {
      title: "hello",
      content: "world"
    }
  ]
};

const actions = {
  addMemo: (title, content, callback = () => {}) => ({
    type: types.ADD_MEMO,
    payload: { title, content },
    callback
  }),
  removeMemo: id => ({ type: types.REMOVE_MEMO, payload: { id } })
};

const mutations = {
  [types.ADD_MEMO]: (state, { payload: { title, content } }) => {
    state.memos.push({
      id: state.memos.length + 1,
      title,
      content
    });
    return state;
  },
  [types.REMOVE_MEMO]: (state, { payload: { id } }) => {
    state.memos = _.filter(state.memos, memo => memo.id !== id);
    return state;
  }
};

const sagas = createSagas({
  [types.ADD_MEMO]: function* ({ callback }) {
    callback();
  }
});

export const module = {
  title: "memo",
  state,
  actions,
  mutations,
  sagas
};

//OPTIONAL: if you want to access this module using render props in your components:
export default createContainer(module);
