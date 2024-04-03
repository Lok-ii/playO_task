import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Context from "./Context/Context";

function App() {

  return (
    <Context>
      <Sidebar />
      <Home />
    </Context>
  );
}

export default App;
