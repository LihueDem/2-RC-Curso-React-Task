import "./styles/index.css";
import { NavBar } from "./components/navbar/NavBar";
import { Task } from "./components/task/Task";

const App = () => {
  return (
    <>
      <NavBar />
      <Task />
    </>
  );
};

export default App;
