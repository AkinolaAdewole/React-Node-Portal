import logo from './logo.svg';
import './App.css';
import ConnectToBackend from './components/ConnectToBackend';
import DisplayfromBackend from './components/DisplayfromBackend';
import Signup from './components/Signup';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>} /> 
      <Route path="/connect" element={<ConnectToBackend />} /> 
      <Route path='/login' element={<Login />} />
     <Route path='/display' element={<DisplayfromBackend />} />
     </Routes>
    </>
  );
}

export default App;
