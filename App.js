import "./App.css";
import React from "react";
import "./index.css";
import AllTodos from "./components/alltodos";
import { CreateTodo } from "./components/createTodo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllTodos />
      <CreateTodo />
    </div>
  );
}

export default App;
