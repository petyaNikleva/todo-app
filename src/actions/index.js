import { createAction } from "redux-actions";

export const addToDo = createAction("ADD_TODO", (data) => {
  return {
    id: new Date().getTime().toString(),
    isCompleted: false,
    task: data
  };
});

export const deleteToDo = createAction("DELETE_TODO", (id) => {
  return { id }
});

export const updateToDo = createAction("UPDATE_TODO", (id, data) => {
  return {
    id,
    data
  }
});

