import React, { useContext } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router, Route } from 'react-router-dom';




const App = () => {
 
  return (
  <div >
    <Router>
       <Header/>
       <AnimRoutes/>
       
    </Router>

    
    
  </div>
  
  );
};

export default App;
