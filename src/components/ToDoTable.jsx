import { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ToDoTableRow from "./ToDoTableRow";
import store from "../reducers";

const ToDoTable = () => {
  const [todolist, setToDoList] = useState([])

  function onStoreChange() {
    setToDoList(store.getState().todolist)
  }

  store.subscribe(onStoreChange);

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table sx={{ minWidth: 450 }} >
        <TableHead>
          <TableRow >
            <TableCell align='center'>Task</TableCell>
            <TableCell align='center'>Completed</TableCell>
            <TableCell align='center'>Update</TableCell>
            <TableCell align='center'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {
            todolist.map((todo) => (
              <ToDoTableRow key={todo.id} todo={todo} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ToDoTable;


