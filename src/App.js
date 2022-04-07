import React from 'react'
import Header from './components/Header'
import CustomMeme from './components/CustomMeme'
import TwistedMeme from './components/TwistedMeme'
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
          memeVersion ? <CustomMeme /> : <TwistedMeme />
        } />            
      </Routes>
    </div>
  );
}

export default App;


