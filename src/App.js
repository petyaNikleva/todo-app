import './App.css';
import ToDoTable from './components/ToDoTable';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoTable />
    </div>
  )
}

export default App;
