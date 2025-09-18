
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./component/Login"
import Shopping from "./component/Shopping";
import Select from "./component/Select";



function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}  />
      <Route path="/shopping" element={<Shopping/>}  />
      <Route path="/select/:id" element={<Select/>}  />
    </Routes>
  </Router>
    
  )
};

export default App;