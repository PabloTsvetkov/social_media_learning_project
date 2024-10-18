import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UpdateNewPostText } from './Redux/state';

function App(props) {
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
            <Route path='/profile' element={<Profile postsBlock={props.state.postsBlock} AddPost={props.AddPost} UpdateNewPostText={props.UpdateNewPostText} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogsPreview={props.state.dialogsBlock.dialogsPreview} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
