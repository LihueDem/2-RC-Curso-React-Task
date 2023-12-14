import "./styles/index.css";
import CustomBanner from "./components/banner/CustomBanner";
import NavBar from "./components/navbar/NavBar";
import Task from "./components/task/Task";
import TaskAdd from "./components/task/TaskAdd";

const App = () => {
  return (
    <>
      <CustomBanner />
      <NavBar />
      <Task />
      <TaskAdd />
    </>
  );
};

export default App;
