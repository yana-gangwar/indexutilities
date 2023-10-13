import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState(`light`);
 const [alert, setAlert] = useState(null);



const showAlert=(message,type)=>{
  setAlert({
msg: message,
type: type
  })
setTimeout(() => {
  setAlert(null);
  
}, 1500);

}



 const toggleMode=()=>{
  if(mode ==='light'){
    setMode ('dark');
    document.body.style.backgroundColor ='#13315f';
    showAlert("Dark Mode has been enabled","Success");
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light Mode has been enabled","Success");

  }

}




  return (
    <>
  <Router>
      <Navbar tittle="Textutils" mode={mode} toggleMode={toggleMode} />
       <Alert   alert={alert}  />
      <div className="container">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <Textform heading="Enter Your text To Analyze Below"   mode={mode}   showAlert={showAlert} />

          </Route>
        </Switch>
      
      </div>
      </Router>
    </>
  );
}

export default App;
