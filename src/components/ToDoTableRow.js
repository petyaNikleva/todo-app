import { useEffect, useState, useRef, } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Checkbox, TableCell, TableRow, Typography, Input } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

import { updateToDo, deleteToDo } from '../actions';

const ToDoTableRow = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [updatedText, setUpdatedText] = useState(todo.task)
  const [typographyText, setTypographyText] = useState(todo.task)
  const [isEditing, setEditing] = useState(false);
  const [displayVisible, setDisplayVisible] = useState("block");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  let crossText = isChecked === true ? "line-through" : "none";

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) {
      setDisplayVisible("none")
    } else {
      setDisplayVisible("block")
    }
    setTypographyText(todo.task);
    setUpdatedText(todo.task);
    setIsChecked(todo.isCompleted)
  }, [isEditing, todo])

  const inputChangeHandler = (e) => {
    setUpdatedText(e.target.value);
  }

  const onSaveHandler = () => {
    toggleEditing();
    dispatch(updateToDo(todo.id, { task: updatedText, isCompleted: isChecked }));
  }

  const onDiscardChanges = () => {
    toggleEditing();
  }

  return (
    <TableRow>
      <TableCell align='center'>
        <Typography sx={{ textDecoration: crossText, display: displayVisible }} >{typographyText}</Typography>
        {isEditing &&
          <Box>
            <Input
              autoFocus
              sx={{ textDecoration: crossText }}
              value={updatedText}
              ref={inputRef}
              onChange={e => inputChangeHandler(e)}
            />
            <SaveIcon sx={{ cursor: "pointer" }} onClick={onSaveHandler} />
            <ClearIcon sx={{ cursor: "pointer", ml: 1 }} onClick={onDiscardChanges} />
          </Box>
        }
      </TableCell>
      <TableCell align='center' padding="checkbox">
        <Checkbox
          checked={!!isChecked}
          onChange={(e) => dispatch(updateToDo(todo.id, { isCompleted: !isChecked, task: todo.task }))}
        />
      </TableCell>
      <TableCell align='center' >
        <CreateIcon sx={{ cursor: "pointer" }} onClick={toggleEditing} />
      </TableCell>
      <TableCell align='center'>
        <DeleteIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(deleteToDo(todo.id))} />
      </TableCell>
    </TableRow >
  )
}

export default ToDoTableRow;

