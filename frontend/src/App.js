import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './pages/ChatPage';
import HompePage from './pages/HompePage';
import "./App.css"

const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<HompePage />} />
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default App