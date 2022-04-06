import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { NavLink } from 'react-router-dom';
import Duongdan from './Components/Duongdan';

function App() {
  return (
    
    // <div className="App">
    //       <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    //         <div class="container">
    //             <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
    //             <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    //                 Menu
    //                 <i class="fas fa-bars"></i>
    //             </button>
    //             <div>
    //       <ul>
    //         <li>
    //           <NavLink to="/login">dangn hap</NavLink>
    //           <a>dan xuat</a>
    //           <NavLink to="/register">dang ky</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //         </div>
    //     </nav>
    
 <Duongdan/>
 
    //     <div>
    //       <ul>
    //         <li>
    //           <NavLink to="/login">dangn hap</NavLink>
    //           <a>dan xuat</a>
    //           <NavLink to="/register">dang ky</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    // </div>

    
  );
}

export default App;
