// import logo from './logo.svg';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
// let mahajan="gupta sahab";
import Navbar from './components/Navbar';
import  TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState("light");// whreather dark mode enable or not
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
       setAlert(null);
  },3000);
}
  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");// setMode is the funcction which changes the value of mode
      document.body.style.backgroundColor="grey";
      showAlert("you have enable dark mode","success");
      // to dynamically change the title
      document.title="Mahajan App-darkmode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("YOU ENABLE LIGHT MODE","success");
      document.title="Mahajan App-lightMode";
    }
  }
  const toggleModes=()=>{
    if(mode === "light"){
      setMode("success");// setMode is the funcction which changes the value of mode
      document.body.style.backgroundColor="grey";
      showAlert("you have enable green mode","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("YOU ENABLE LIGHT MODE","success");
    }
  }
  return (
 
<>
{/* title and aboutText is props and Navbar is component */}
{/* <Navbar title="MYAPP" aboutText="About Myapp" /> */}
{/* <Navbar/> */}

{/* <Router> */}



<Navbar title="MyAPP" mode={mode} toggleMode={toggleMode} toggleModes={toggleModes}headingcolor="red"/>
<Alert alert={alert}/>
   <div className="container my-3">
   {/* <Switch> */}
          {/* <Route exect path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exect path="/"> */}
          <TextForm showAlert={showAlert} heading="enter the text to analyse" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
   {/* <TextForm showAlert={showAlert} heading="enter the text to analyse" mode={mode} /> */}
     {/* <About/> */}
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;
