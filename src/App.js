import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Maincard from "./Cards";
import Slider from "./Slider";
import Form from "./Form";
import Autoslider from "./Autoslider";
import Countincre from "./Countincre";

const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route excat path="/" Component={Maincard}/>
      <Route excat path="/about" Component={Slider}/>
      <Route excat path="/education" Component={Countincre}/>
      <Route excat path="/employer" Component={Autoslider}/>
      <Route excat path="/contact" Component={Form}/>
    </Routes>
    </>
  );
}

export default App;
