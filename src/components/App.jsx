import {BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Main from "./Route/Main";
import Bj from "./Route/BJ";
import Slots from './Route/Slots'
import Ball from "./Route/Ball";
import './App.scss'

function App() {
  return (
      <Router className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/rofl_cas' element={<Main/>}/>
          <Route path='/bj' element={<Bj/>}/>
          <Route path='/slots' element={<Slots/>}/>
          <Route path='/ball' element={<Ball/>}/>
        </Routes>
      </Router>
  );
}

export default App;
