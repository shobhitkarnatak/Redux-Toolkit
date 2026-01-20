import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <p className="text-xl font-bold underline">Learn About Redux Toolkit</p>
      <AddTodos/>
      <Todos/>
    </>
  );
}

export default App;
