import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useSelector } from "react-redux";
import ToDoTableRow from "./ToDoTableRow";


const ToDoTable = () => {
  const todolist = useSelector((state) => state.allReducers.todolist);

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
            todolist.map((element) => (
              <ToDoTableRow key={element.id} element={element} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ToDoTable;


