import { call, fork, take, select, put, cancel, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import { action } from './actionHelper';
import { createReducer } from "./reducerHelper";
import { FAILURE, FETCH, LOADING, SUCCESS } from "./constants";

const initialState = {
  loading: false
};

const updateLoadingReducer = {
  [LOADING]: (state, { loading }) => ({
    ...state,
    loading
  })
};

export const reducers = createReducer(initialState, {
  ...updateLoadingReducer
});

function* doLoading({ loading }) {
  // proccess Loading
  console.log('do loading : ' + loading);
  yield put(action(LOADING, { loading }));
}

export function* sagas() {
  yield takeLatest(action => _.reduce([FETCH, SUCCESS, FAILURE],
    (state, type) => state || new RegExp(`^${type}_`).test(action.type), false),
    doLoading);
}