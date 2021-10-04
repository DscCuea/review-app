import React, {useState, useEffect}  from 'react';
import NavPage from './Components/NavPage';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  const [student, setStudent] = useState();
  useEffect(() => {
    getStudent();
  }, [])
  function getStudent(){
    
  }
  return (
    <div className="App">
      
     <NavPage/>
     <Router>
      <Route path="/"  exact component={Home}/>
      <Route path="/About" compoent={About}/>
     </Router>
    </div>
  );
}

export default App;
