import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import ParkSearch from './Pages/ParkSearch'
import ParkDetailPage from './Pages/ParkDetailPage'
import AboutUs from './Pages/AboutUs'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
     <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/parksearch' component={ParkSearch}/>
         <Route path='/parkdetails' component={ParkDetailPage}/>
         <Route path='/aboutus' component={AboutUs}/>
       </Switch>
     </Router>
    </>
   
  );
}

export default App;
