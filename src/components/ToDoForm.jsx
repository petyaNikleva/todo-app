import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, DataGrid, Typography } from '@mui/material';

import { addToDo } from '../actions';
import AddIcon from '@mui/icons-material/Add';


const ToDoForm = () => {
  const [inputData, setInputData] = useState({ task: "" })

  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!inputData.task) return;
    dispatch(addToDo(inputData))
    setInputData({ task: '' })
  }

  return (
    <form className="todo-form" onSubmit={handleSumbit}>
      <TextField label="New Todo" value={inputData.task} onChange={e => setInputData({ task: e.target.value })} />
      <Button type="submit">
        <AddIcon />Add
      </Button>
    </form>
  )
}

export default ToDoForm;

