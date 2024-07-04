import {BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './Hooks/useAuthContext';


function App() {
  const {user}=useAuthContext()

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
       <div className='pages'>
        <Routes>
          <Route   
            path='/'
            element={ user?  <Home/> : <Navigate to='/Login' />  }
          />
          <Route   
            path='/Login'
            element={ !user ? <Login/> : <Navigate to='/' /> }
          />
          <Route   
            path='/Signup'
            element={ !user ? <Signup/> : <Navigate to='/'/> }



          />
          
        </Routes>

       </div>


     </BrowserRouter>
    </div>
  );
}

export default App;
