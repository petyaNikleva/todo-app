import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addToDo } from '../actions';
import { useDispatch } from 'react-redux';


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
    <form onSubmit={handleSumbit}>
      <Box sx={{ display: "flex" }}>
        <TextField label="New Todo" value={inputData} onChange={e => setInputData(e.target.value)} />
        <Button type="submit">
          <AddIcon />Add
        </Button>
      </Box>
    </form>
  )
}

export default ToDoForm;

