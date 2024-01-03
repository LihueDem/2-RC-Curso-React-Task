import "./styles/index.css";
import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Task } from "./components/task/Task";

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Task />
    </>
  );
};

export default App;
