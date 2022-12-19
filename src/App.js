import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from '@chakra-ui/react'

// components & pages
import Navbar from './components/Navbar';
import Home from "./pages/Home";

function App() {
  return (
    <Box h='100vh'>
      <BrowserRouter>
        <Navbar />
        <Box>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
          </Routes>
        </Box>
      </BrowserRouter> 
    </Box>
  );
}

export default App;
