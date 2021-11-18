import { useState } from 'react';
import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Main from "./Route/Main";
import Bj from "./Route/BJ";
import Slots from './Route/Slots'
import Ball from "./Route/Ball";
import './App.scss'

function App() {
  let [name, useName] = useState('');
  let [money, useMoney] = useState(1000);

  return (
      <Router className="App">
        <Navbar name={name} setName={useName} money={money}/>
        <Routes>
          <Route exact path='/rofl_cas' element={<Main/>}/>
          <Route path='/bj' element={<Bj useMoney={useMoney} money={money}/>}/>
          <Route path='/slots' element={<Slots useMoney={useMoney} money={money}/>}/>
          <Route path='/ball' element={<Ball/>}/>
        </Routes>
      </Router>
  );
}

export default App;
