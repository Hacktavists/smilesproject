import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AssistanceForm from "./components/forms/AssistanceForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <AssistanceForm />
    </div>
  );
  
export default App;
