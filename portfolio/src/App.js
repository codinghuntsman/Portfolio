import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Projects from './component/Home/Projects';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
