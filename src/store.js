import { createStore } from "redux";
import rootReducers from "./reducers";

const store = createStore(rootReducers);

export default store;

// import { createStore } from 'redux'
// import rootReducers from './reducers'

// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

// const store = createStore(rootReducer, preloadedState)

