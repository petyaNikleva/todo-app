import { handleActions } from "redux-actions"
import { createStore } from "redux"
import { addToDo, updateToDo, deleteToDo } from './../actions/index'

const defaultState = {
  todolist: []
}

const reducers = handleActions(
  {
    [addToDo]: (state, { payload }) => {
      return {
        ...state,
        todolist: [
          ...state.todolist, payload
        ]
      }
    },
    [updateToDo]: (state, { payload }) => {
      const updatedList = state.todolist.map(todo => {
        return (todo.id === payload.id ? (
          { ...todo, task: payload.data.task, isCompleted: payload.data.isCompleted })
          : (todo = todo))
      })
      return {
        ...state,
        todolist: updatedList
      }
    },
    [deleteToDo]: (state, { payload }) => {
      const newToDoList = state.todolist.filter(todo => todo.id !== payload.id);
      return {
        ...state,
        todolist: newToDoList
      }
    }
  },
  defaultState
)


const store = createStore(reducers, defaultState);

export default store;