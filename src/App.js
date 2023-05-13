// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {

  const [alert,setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const togglemode = ()=>{
    if(mode === "light"){
      changeMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success")
    }
   
    else{
      changeMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success")
    }
   
     
  }
 

  const [mode, changeMode] = useState("light")
  return (
    <>
     {/* <Router> */}
    <Navbar title = "TextUtils" about = "About us" mode = {mode} toggleMode = {togglemode} />
    <Alert alert={alert} />
    <div className="container my-3">
   
    {/* <Routes> */}
    {/* <About /> */}
    <Text showAlert = {showAlert} heading = "Enter the text here" mode={mode} />


          
          
        {/* </Routes> */}
    
   
    </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
