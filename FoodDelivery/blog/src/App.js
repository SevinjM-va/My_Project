import { Navbar } from './Components/Navbar';
import './App.css';
import {Home} from './Components/Home';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import {Restaurants} from './Components/Restaurants'
import { Signup } from './Components/SignUp';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route path='/signup' element={ <Signup/>}/>
          <Route path ='/restaurants/' element={<Restaurants/>}/>
      </Routes>
    </div>
  );
}

export default App;
