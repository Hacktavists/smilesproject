import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import AssistanceForm from "./components/forms/AssistanceForm";
import Checkboxes from "./components/Checkboxes";
import ThankYou from "./components/ThankYou";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Homepage} />
          <Route path="/Checkboxes" component={Checkboxes} />
          <Route path="/AssistanceForm" component={AssistanceForm} />
          <Route path="/ThankYou" component={ThankYou} />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
