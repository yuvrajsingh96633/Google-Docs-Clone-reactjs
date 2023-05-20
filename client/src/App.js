import logo from './logo.svg';
import './App.css';
import Sidebar from "./component/Sidebar.js";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Editor from './component/editor';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`} /> } />
        <Route path='/docs/:id' element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;