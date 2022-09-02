import React from 'react'
import './App.css';
import { Container } from '@material-ui/core'
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';

function App() {
  return (
    <Container>
     <Navbar />
     <Routes>
      <Route index path="/" element={<Home />}/>
      <Route path="/auth" element={<Auth />}/>
     </Routes>
    </Container>
  );
}

export default App;
