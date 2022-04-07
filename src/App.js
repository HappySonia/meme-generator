import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import Meme2 from './components/Meme2'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [ memeVersion, setMemeVersion ] = React.useState(false)

  function toggle(){
      return setMemeVersion(prevVersion => !prevVersion)
  }
  
  return (
    <div className="App">
      <Header toggle={toggle} memeVersion={memeVersion} />
      <Routes>
        <Route exact path='/' element={
          memeVersion ? <Meme /> : <Meme2 />
        } />            
      </Routes>
    </div>
  );
}

export default App;


