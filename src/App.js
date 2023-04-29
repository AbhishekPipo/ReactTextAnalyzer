import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React from "react";

// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router,
   Switch, 
   Route, 
   Link } from 'react-router-dom';


import TextForm from "./components/TextForm";
import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [mode, setMode]=useState("dark")//tells whether dark mode is enabled or not
  
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{

    setAlert({
      msg: message, 
      type: type
    })
  }
  const toggleMode= () =>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    showAlert("Dark Mode Has Been Enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    showAlert("Dark Mode Has Been Disabled", "success")

    }
    
    // setMode(mode==="light"? "dark"  document.body.Style.backgroundColor="black" : "light"  document.body.Style.backgroundColor="black")
   
  }
  

  return (
    <>
      <Navbar title="AbhiTextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert  alert= {alert} ></Alert>
      
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            {<About />}
          </Route>
          <Route exact path="/users">
            {<Users />}
          </Route>
          <Route exact path="/users/:id"></Route>
        </Switch>
        <TextForm heading="Enter text here to analyze"></TextForm>

        <About/>
      </div>
    </>
  );
}

export default App;
