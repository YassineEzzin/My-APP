import { Link } from "react-router-dom";
import {useLogout} from '../Hooks/useLogout'
import { useAuthContext } from "../Hooks/useAuthContext";
import logoCofat from '../imgs/cofat_tunisie.jpg'
 const Navbar = ()=>{
  const {logout} = useLogout()
  const {user}=useAuthContext()
  const handleClick= ()=>{
    
    logout()
  }

    return(
        <header>
            <div className="container">
              <div className="inContainer" >
                
                

                <Link to='/' >
                <img src={logoCofat} alt="logo" className="navImg" />
                
                </Link>
                </div>
                <nav>
                  {user && (
                  <div>
                    <span> {user.email} </span>
                    <button  onClick={handleClick} >
                      LOG OUT
                    </button>
                  </div>)}
                  {!user && (
                <div>  
                <Link to='/Login'>
                    <button>  Login  </button>
                </Link>
                <Link to='/Signup'>
                  <button> Singup </button>
                </Link>
                </div>)}
                </nav>
            </div>
        </header>
    )
 }
 export default Navbar  