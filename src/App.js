import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Dialogues from './Components/Dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <header className='header'>
          <Header />
        </header>

        <nav className='sidebar'>
          <Sidebar />
        </nav>
        <div className='mainContent'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogues/*' element={<Dialogues />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
