import Navbar from "./Navbar/Navbar";
import Main from "./Route/Main";
import Bj from "./Route/BJ";
import Slots from './Route/Slots'
import Ball from "./Route/Ball";
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Ball/>
    </div>
  );
}

export default App;
