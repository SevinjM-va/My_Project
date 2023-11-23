import { Navbar } from './Components/Navbar';
import './App.css';
import {Home} from './Components/Home';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import { Signup } from './Components/SignUp';
import { Login } from './Components/Login';
import { Explore } from './Components/Explore';
import {Restaurants} from './Components/Restaurants'
import { Stores } from './Components/Stores';


function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={ <Home/>}/>
          <Route path='/signup' element={ <Signup/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path ='/explore' element={<Explore/>}/>
          <Route path ='/restaurants/' element={<Restaurants/>}/>
          <Route path ='/stores' element={<Stores/>}/>
      </Routes>
    </div>
  );
}

export default App;
