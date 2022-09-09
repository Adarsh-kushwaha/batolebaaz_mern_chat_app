import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import HompePage from './components/HompePage';

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<HompePage/>} />
        <Route exact path="/chat" element={<Chat/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App