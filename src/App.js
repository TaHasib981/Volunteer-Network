import './App.css';
import Header from './Component/Header/Header';
import Bismillah from './Component/Bismillah/Bismillah';
import { Route, Routes, } from 'react-router-dom';
import Home from './Component/Home/Home';
import Insert from './Component/Insert/Insert';
import Update from './Component/Update/Update';

function App() {
  return (
    <div>
      <Bismillah></Bismillah>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path="/inservice" element={<Insert></Insert>} />
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
    </div>
  );
}

export default App;




















        {/* <Route path="/update/:id" element={<Update></Update>}/> */}
