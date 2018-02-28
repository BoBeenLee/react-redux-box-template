import { combineReducers } from "redux";
import { moduleToReducer } from "redux-box";
import { all } from "redux-saga/effects";
import { module as memoModule } from "./memo";
import { module as counterModule } from "./counter";
import { module as loadedModule } from "./loaded";
import { reducers as loadingReducers, sagas as loadingSagas } from "./loading";

//hook up your module reducers
export const reducers = combineReducers({
  memo: moduleToReducer(memoModule),
  counter: moduleToReducer(counterModule),
  loaded: moduleToReducer(loadedModule),
  loading: loadingReducers
});

const sagas = [...memoModule.sagas, ...loadedModule.sagas, loadingSagas];

export function* rootSaga() {
  yield all(sagas);
}
