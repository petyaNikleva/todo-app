import { useSelector } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ToDoTableRow from "./ToDoTableRow";

const ToDoTable = () => {
  const todolist = useSelector(state => state.todolist);

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      {todolist.length > 0 && (
        <Table>
          <TableHead sx={{ backgroundColor: "#aeeaff" }}>
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
        </Table>)}
    </TableContainer>
  )
}

export default ToDoTable;


