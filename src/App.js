import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Meme />} />
      </Routes>
    </div>
  );
}

export default App;


