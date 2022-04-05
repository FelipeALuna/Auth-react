
import './App.css';
import Register from './components/Register';
import { Routes, Route, Router } from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <div className="App">    
       <Routes>
            <Route path="/" caseSensitive={false} element={<Login />}/>               
            <Route path="/register" caseSensitive={false} element={<Register/>} />
        </Routes>
    </div>
  );
}

export default App;
