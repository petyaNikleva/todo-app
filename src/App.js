import { Provider } from 'react-redux';
import './App.css';
import ToDoTable from './components/Table';
import ToDoForm from './components/ToDoForm';


//import ToDoForm2 from './components/ToDoForm2'

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoTable />
      <ToDoTable />
    </div>
  )
}

export default App;
