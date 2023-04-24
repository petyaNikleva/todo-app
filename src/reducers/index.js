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
      return {
        ...state,
        todolist: state.todolist.filter(todo => todo.id !== payload.id)
      }
    }
  },
  defaultState
)

export default reducers;