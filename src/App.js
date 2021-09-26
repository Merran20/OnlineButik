import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Clothes from './components/Clothes/Clothes';
import ShopingCart from './components/ShopingCart/ShopingCart';
import Shoes from './components/Shoes/Shoes';
import Jackets from './components/Jackets/Jackets';
import axios from 'axios';
import Details from './components/Details/Details';
import Shirts from './components/Shirts/Shirts';
import Shiping from './components/Shiping/Shiping';
import Admin from './components/Admin/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NotFound(){
  return <h3>Not Found </h3>
}




function App() {
  
 
  return (<div>


    <Router>
    {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clothes">Clothes</Link>
            </li>
            <li>
              <Link to="/shopingcart">Shoping Cart</Link>
            </li>
            
          </ul>
        </nav> */}

        <div className="header_menu"> 

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/shopingcart">Shoping Cart</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clothes</a>
       
        <div class="dropdown-menu" aria-labelledby="dropdownId">
          <Link class="dropdown-item" to="/shoes">Shoes </Link>
          <Link class="dropdown-item" to="/jackets">Jackets</Link>
          <Link class="dropdown-item" to="/shirts">Shirts</Link>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin">Admin</Link>
      </li>
    </ul>
   
  </div>
</nav>


  </div>



        <hr />

  <Switch>
    <Route exact path="/"  >
      <Home />
      </Route>
    <Route path="/clothes" >
      <Clothes/>
      </Route>
      <Route path="/shopingcart" >
      <ShopingCart/>
      </Route>
      <Route path="/shiping"  >
        <Shiping/>
        </Route>
      
      <Route path="/shoes" >
      <Shoes/>
      </Route>
      <Route path="/jackets" >
      <Jackets/>
      </Route>

      <Route path="/shirts" >
      <Shirts/>
      </Route>

      {/* <Route  path="/details/:id">
     <Details  />
      </Route> */}

      <Route path="/details/:category/:id" render={(props)=><Details {...props}/>} />
      <Route  >
      <Admin />
      </Route>
    <Route  >
      <NotFound/>
      </Route>

  </Switch>
</Router>

 

</div>


  );
 
    
 
}

export default App;
