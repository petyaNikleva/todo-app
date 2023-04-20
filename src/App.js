import ToDoTable from './components/ToDoTable';
import ToDoForm from './components/ToDoForm';
import Header from './components/Header';
import { Box, Container } from '@mui/material';

import React from 'react';

function App() {

  return (
    <Container maxWidth="sm" >
      <Box sx={{ my: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Header />
        <ToDoForm />
        <ToDoTable />
      </Box>
    </Container>
  )
}

export default App;
