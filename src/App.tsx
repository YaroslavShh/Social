import React from 'react';
import main from './App.module.css';
import {Technologies} from "./component/Technologies/Technologies";
import {About} from "./component/About/About";
import {Header} from "./component/Header/Header";
import {Footer} from "./component/Footer/Footer";

function App() {
  return (
    <div className={main.wrapper}>
      <Header/>
      <About/>
      <Technologies/>
      <Footer/>
    </div>
  );
}

export default App;
