import { handleActions } from "redux-actions"
import { addToDo, updateToDo, deleteToDo } from '../actions'

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
        return (todo.id === payload.id
          ? ({ ...todo, task: payload.data.task, isCompleted: payload.data.isCompleted })
          : (todo = todo))
      })
      return {
        ...state,
        todolist: updatedList
      }
    },
    [deleteToDo]: (state, { payload }) => {
      const indexToRemove = state.todolist.findIndex(todo => todo.id === payload.id);
      const resultArr = [...state.todolist];
      resultArr.splice(indexToRemove, 1);
      return {
        ...state,
        todolist: resultArr
      }
    }
  },
  defaultState
)

export default reducers;