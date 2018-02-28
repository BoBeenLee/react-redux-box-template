import {
  call,
  fork,
  take,
  select,
  put,
  cancel,
  takeLatest,
  takeEvery
} from "redux-saga/effects";
import { createSagas, createContainer } from "redux-box";
import _ from "lodash";


const types = {
  LOADED: 'LOADED'
};

const sagas = createSagas({
  [types.LOADED]: function* ({ loaded }) {
    yield* loaded;
  }
});

export const module = {
  name: "loaded",
  state: {},
  actions: {},
  mutations: {},
  sagas
};

export default createContainer(module);