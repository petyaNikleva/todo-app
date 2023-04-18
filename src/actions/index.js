export const addToDo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      isCompleted: false,
      isEditing: false,
      data
    }
  }
}

export const updateToDo = (id, data) => {
  console.log(id)
  console.log(data)
  return {
    type: "UPDATE_TODO",
    id,
    data
  }
}

export const deleteToDo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  }
}

