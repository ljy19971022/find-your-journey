import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import MapViews from './Pages/MapViews'
import ParkSearch from './Pages/ParkSearch'
import ParkDetailPage from './Pages/ParkDetailPage'
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
         <Route path='/mapviews' component={MapViews}/>
         <Route path='/parkdetails' component={ParkDetailPage}/>
       </Switch>
     </Router>
    </>
   
  );
}

export default App;
