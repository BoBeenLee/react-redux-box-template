import { createSagas, createContainer } from "redux-box";
import { createReducer } from "./reducerHelper";
import { action, createFetchTypes } from "./actionHelper";
import { FAILURE, FETCH, SUCCESS, LOADED } from "./constants";
import { fetchEntity } from "./sagaHelper";
import agent from "../apis/agent";

const types = {
  COUNTER: createFetchTypes("COUNTER"),
  PLUS_COUNTER: 'ADD_COUNTER',
  MINUS_COUNTER: 'MINUS_COUNTER',
};

const fetchData = {
  fetch: () => action(types.COUNTER[FETCH], { loading: true }),
  success: response =>
    action(types.COUNTER[SUCCESS], {
      loading: false,
      loaded: true,
      payload: { counter: response }
    }),
  failure: error =>
    action(types.COUNTER[FAILURE], { loading: false, loaded: false, error })
};

const actions = {
  fetchCounter: () => ({
    type: LOADED,
    loaded: fetchEntity(fetchData, agent.Counter.getCounter)
  }),
  plusCounter: () => ({
    type: types.PLUS_COUNTER
  }),
  minusCounter: () => ({
    type: types.MINUS_COUNTER
  })
};

export const getCounter = state => state.counter;

const initialState = {
  counter: 0
};

const mutations = {
  [types.COUNTER[SUCCESS]]: (state, { payload: { counter } }) => {
    state.counter = counter;
    return state;
  },
  [types.COUNTER[FAILURE]]: state => initialState,
  [types.PLUS_COUNTER]: (state) => state.counter += 1,
  [types.MINUS_COUNTER]: (state) => state.counter -= 1
};

export const module = {
  name: "counter",
  state: initialState,
  actions,
  mutations
};

export default createContainer(module);
