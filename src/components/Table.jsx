// import { useSelector, useDispatch } from 'react-redux';
// import { IconButton, List, ListItem, ListItemText } from '@mui/material';
// import { Delete } from '@mui/icons-material';


// function ToDoTable() {
//   const todos = useSelector(state => state.todos);
//   const dispatch = useDispatch();

//   const handleDelete = id => {
//     dispatch({ type: 'REMOVE_TODO', payload: id });
//   };

//   return (
//     <List>
//       {todos.map(todo => (
//         <ListItem key={todo.id}>
//           <ListItemText primary={todo.text} />
//           <IconButton onClick={() => handleDelete(todo.id)}>
//             <Delete />
//           </IconButton>
//         </ListItem>
//       ))}
//     </List>
//   );
// }

// export default ToDoTable

import { Box, Button, IconButton, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, updateToDo } from "../actions";
import ToDoTableRow from "./ToDoTableRow";


const ToDoTable = () => {
  const todolist = useSelector((state) => state.allReducers.todolist);

  return (
    <>
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
    </>
  )
}

export default ToDoTable;


