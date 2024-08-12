import "./App.css";
import AllTodos from "./components/alltodos";
import { CreateTodo } from "./components/createTodo";

function App() {
  return (
    <div className="App">
      <h1>Impossible List </h1>
      <AllTodos />
      <CreateTodo />
    </div>
  );
}

export default App;
