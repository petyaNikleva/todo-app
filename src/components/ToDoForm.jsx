import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import store from '../reducers/reducers';
import { addToDo } from '../actions';


const ToDoForm = () => {
  const [inputData, setInputData] = useState("")

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!inputData) return;

    store.dispatch(addToDo(inputData))
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

