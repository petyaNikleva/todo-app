import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

import { addToDo } from '../actions';
import AddIcon from '@mui/icons-material/Add';


const ToDoForm = () => {
  const [inputData, setInputData] = useState("")

  const dispatch = useDispatch();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!inputData) return;
    dispatch(addToDo(inputData))
    setInputData("")
  }

  return (
    <form className="todo-form" onSubmit={handleSumbit}>
      <TextField label="New Todo" value={inputData} onChange={e => setInputData(e.target.value)} />
      <Button type="submit">
        <AddIcon />Add
      </Button>
    </form>
  )
}

export default ToDoForm;

