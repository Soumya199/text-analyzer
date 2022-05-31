import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import { useState } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Abouts from "./components/Abouts"

function App() {
  const [allert, setAllert] = useState(null)

  const showAllert=(message,type)=>{
    setAllert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAllert("")
    },3000)
  }
  return (
    <Router>
      <Navbar title="NewApp" allert={showAllert}/>
      <Alert alert={allert}/>
      <Routes>
       <Route exact path="/" element={<TextForms heading="Text Analyzer" allert={showAllert}/>}/>
       <Route exact path="/about" element={<Abouts/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
