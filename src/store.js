import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

const applicationState = 'applicationState';

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(applicationState, JSON.stringify(
      getState()
    ));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem(applicationState) !== null) {
    return JSON.parse(localStorage.getItem(applicationState))
  }
}

const store = createStore(
  reducers,
  reHydrateStore(),
  applyMiddleware(
    localStorageMiddleware,
  )
)

export default store;