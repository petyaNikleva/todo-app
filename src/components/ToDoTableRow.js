import { useEffect, useState, useRef, } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, Checkbox, TableCell, TableRow, Input } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

import { updateToDo, deleteToDo } from '../actions';

const ToDoTableRow = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [updatedText, setUpdatedText] = useState(todo.task)
  const [isEditing, setEditing] = useState(todo.isEditMode);
  const dispatch = useDispatch();

  const crossText = isChecked === true ? "line-through" : "none";

  useEffect(() => {
    setEditing(todo.isEditing);
    setUpdatedText(todo.task);
    setIsChecked(todo.isCompleted);
  }, [todo])

  const InputReadOnly = () => {
    return <Input value={updatedText} sx={{ textDecoration: crossText, }} readOnly disableUnderline />
  }

  const InputEditMode = () => {
    return <Box>
      <Input
        autoFocus
        sx={{ textDecoration: crossText }}
        value={updatedText}
        onChange={e => setUpdatedText(e.target.value)}
      />
      <SaveIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(updateToDo(todo.id, { task: updatedText, isCompleted: isChecked, isEditing: !isEditing }))} />
      <ClearIcon sx={{ cursor: "pointer", ml: 1 }} onClick={() => dispatch(updateToDo(todo.id, { isCompleted: isChecked, isEditing: !isEditing, task: todo.task }))} />
    </Box>
  }

  return (
    <TableRow>
      <TableCell>
        {todo.isEditing ? <InputEditMode /> : <InputReadOnly />}
      </TableCell>
      <TableCell align='center' padding="checkbox">
        <Checkbox
          checked={!!isChecked}
          onChange={(e) => dispatch(updateToDo(todo.id, { isCompleted: !isChecked, isEditing: todo.isEditing, task: todo.task }))}
        />
      </TableCell>
      <TableCell align='center' >
        <CreateIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(updateToDo(todo.id, { isCompleted: isChecked, isEditing: !isEditing, task: todo.task }))} />
      </TableCell>
      <TableCell align='center'>
        <DeleteIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(deleteToDo(todo.id))} />
      </TableCell>
    </TableRow >
  )
};

ToDoTableRow.propTypes = {
  todo: PropTypes.object.isRequired
}

export default ToDoTableRow;

