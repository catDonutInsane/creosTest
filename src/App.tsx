import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import axios from 'axios';
import { DesignerList } from './components/designersList/DesinerList';
import { Graphicks } from './components/Graphics/Graphicks';
import { Routes,Route } from 'react-router-dom';
import { TopComments } from './components/mainPage/topComments/TopComments';
function App() {

 
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<TopComments/>}></Route>
        <Route path='/designers' element={<DesignerList/>}></Route>
        <Route path='/graphicks' element={<Graphicks/>}></Route>
      </Routes>

      {/* <DesignerList/> */}
    </div>
  )
}

export default App;
