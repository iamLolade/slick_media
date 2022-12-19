import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from '@chakra-ui/react'

// components & pages
import Navbar from './components/Navbar';

function App() {
  return (
    <Box h='100vh'>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter> 
    </Box>
  );
}

export default App;
