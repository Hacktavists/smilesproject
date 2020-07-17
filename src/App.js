import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import AssistanceForm from "./components/forms/AssistanceForm";
import Checkboxes from "./components/Checkboxes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Homepage} />
        <Route path="/Checkboxes" component={Checkboxes} />
        <Route path="/AssistanceForm" component={AssistanceForm} />
      </div>
    </BrowserRouter>
  );
};


export default App;
