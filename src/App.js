import './App.css';
import LeftContent from "./component/LeftContent";
import RigthContent from "./component/RightContent";
import {useState} from "react";

function App() {

    return (
    <div className="App">
        <h1>My Phone Book</h1>
      <div className={"container"}>
        <div className={"left-container"}><LeftContent/></div>
        <div className={"right-container"}><RigthContent/></div>
      </div>
    </div>
  );
}

export default App;
