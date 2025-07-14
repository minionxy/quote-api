import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addquote from './components/Addquote';
import Searchquote from './components/Searchquote';
import Deletequote from './components/Deletequote';
import Viewquote from './components/Viewquote';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Addquote/> }/>
      <Route path='/Searchq' element={ <Searchquote/> }/>
      <Route path='/Deleteq' element={ <Deletequote/> }/>
      <Route path='/Viewq' element={ <Viewquote/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
