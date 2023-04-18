import { useEffect, useState, useRef, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToDo, updateToDo } from '../actions';

import { Box, Checkbox, TableCell, TableRow, Typography, Input } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';


const ToDoTableRow = ({ element }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(element.isCompleted);
  const [updatedText, setUpdatedText] = useState(element.data.task)
  const [typographyText, setTypographyText] = useState(element.data.task)
  const [isEditing, setEditing] = useState(false);
  const [display, setDisplay] = useState("block");
  const inputRef = useRef(null);

  let crossText = isChecked === true ? "line-through" : "none";

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) {
      setDisplay("none")
    } else {
      setDisplay("block")
    }
  }, [isEditing]);

  const inputChangeHandler = (e) => {
    setUpdatedText(e.target.value);
  }

  const onSaveHandler = () => {
    setTypographyText(updatedText);
    toggleEditing();
    dispatch(updateToDo(element.id, { task: updatedText }));
  }

  const onDiscardChanges = () => {
    setUpdatedText(typographyText);
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
          onChange={() => setIsChecked(!isChecked)}
        />
      </TableCell>
      <TableCell align='center' >
        <CreateIcon sx={{ cursor: "pointer" }} onClick={toggleEditing} />
        <CreateIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(updateToDo(element.id, { task: 'ggg' }))} />
        {/* <CreateIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(updateToDo(element.id, { task: 'newTask' }))} /> */}
      </TableCell>
      <TableCell align='center'>
        <DeleteIcon sx={{ cursor: "pointer" }} onClick={() => dispatch(deleteToDo(element.id))} />
      </TableCell>
    </TableRow >
  )
}

export default ToDoTableRow;

