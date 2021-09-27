import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  
  

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is enabled", "success");
    }

    else {
      setMode('dark');
      document.body.style.backgroundColor = '#032234'
      showAlert("Dark Mode is enabled", "success");
    }
  }


  return (
    <>
      <Router>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <TextForm heading = "Enter text to analyse" mode = {mode} showAlert={showAlert}></TextForm>
          </Route>
        </Switch>
        
        
      </div>
      </Router>
    </>
  );
}

export default App;
