import { useEffect, useState, useRef, } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, updateToDo } from '../actions';

import { Box, Checkbox, TableCell, TableRow, Typography, Input } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';


const ToDoTableRow = ({ element }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(element.isCompleted);
  const [updatedText, setUpdatedText] = useState(element.task)
  const [typographyText, setTypographyText] = useState(element.task)
  const [isEditing, setEditing] = useState(false);
  const [display, setDisplay] = useState("block");
  const inputRef = useRef(null);

  let crossText = isChecked === true ? "line-through" : "none";

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  useEffect(() => {
    console.log("table row", element)
    if (isEditing) {
      setDisplay("none")
    } else {
      setDisplay("block")
    }
    setTypographyText(element.task);
    setUpdatedText(element.task);
    setIsChecked(element.isCompleted)
  }, [isEditing, element]);


  const inputChangeHandler = (e) => {
    setUpdatedText(e.target.value);
  }

  const onSaveHandler = () => {
    toggleEditing();
    dispatch(updateToDo(element.id, { task: updatedText, isCompleted: isChecked }));
  }

  const onDiscardChanges = () => {
    toggleEditing();
  }

  return (
    <TableRow>
      <TableCell align='center'>
        <Typography type='input' sx={{ textDecoration: crossText, display: { display } }} >{typographyText}</Typography>
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
          onChange={(e) => dispatch(updateToDo(element.id, { isCompleted: !isChecked, task: element.task }))}
        />
      </TableCell>
      <TableCell align='center' >
        <CreateIcon sx={{ cursor: "pointer" }} onClick={toggleEditing} />
      </TableCell>
      <TableCell align='center'>
        <DeleteIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(deleteToDo(element.id))} />
      </TableCell>
    </TableRow >
  )
}

export default ToDoTableRow;

