const initialInput = {
  todolist: []
}

const allReducers = (state = initialInput, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todolist: [
          ...state.todolist, action.payload
        ]
      }

    case "UPDATE_TODO":
      console.log('update', action.payload)
      const updatedList = state.todolist.map(todo => {
        return (todo.id === action.id ? (
          { ...todo, task: action.data.task, isCompleted: action.data.isCompleted })
          : (todo = todo))
      })
      console.log(updatedList)
      return {
        ...state,
        todolist: updatedList
      }

    case "DELETE_TODO":
      const newToDoList = state.todolist.filter(todo => todo.id !== action.id)
      console.log(state)
      return {
        ...state,
        todolist: newToDoList
      }
    default:
      return state;
  }
}

export default allReducers;

