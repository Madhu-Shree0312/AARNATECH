import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/NavBar";
import Single from "./component/Single";
import "./App.css";

const App = () => {
  const url = "http://www.omdbapi.com/?apikey=57a3af3e&i=tt1285016";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home/>}> </Route>
        <Route path="/single/:id" element ={<Single/>}> </Route>
      </Routes>
    </Router>
  );
};

export default App;