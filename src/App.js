import React, { useState } from 'react';
import Chat from './Chat';
import Login from './Login';
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import { useStateValue } from "./StateProvider";
import './App.css';

function App() {
  
  const [{ user }, dispatch] = useStateValue();




  return (
    <div className="App">
    <BrowserRouter>
    {!user ? (
          <Login />
        ) : (
        
         <>

      <Header/>
      <div className='app__body'>
       <Sidebar/>
       <Routes>
   {/* React router chat screeen */}
       <Route path="/room/:roomId" element={<Chat />} />
       <Route path="/" />
       </Routes>
    
      </div>
      </>
   
    

        )}
           </BrowserRouter>
    </div>
  );
}

export default App;
