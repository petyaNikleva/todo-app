const initialInput = {
  todolist: []
}

const allReducers = (state = initialInput, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { data, id } = action.payload;
      return {
        ...state,
        todolist: [
          ...state.todolist,
          {
            id,
            data
          }
        ]
      }

    case "UPDATE_TODO":
      state.todolist.map(element => {
        return (element.id === action.id ? (element.data = action.data) : (element = element))
      })
      return {
        ...state,
        todolist: [...state.todolist]
      }

    case "DELETE_TODO":
      const newToDoList = state.todolist.filter(element => element.id !== action.id)
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

