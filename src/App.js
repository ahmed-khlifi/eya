import Head from "./components/Head";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "aaaaa",
      day: "5/5",
      reminder: true,
    },
    {
      id: 2,
      text: "bbbbbb",
      day: "6/5",
      reminder: true,
    },
    {
      id: 3,
      text: "hhhh",
      day: "4/5",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Head />
      <Tasks tasks={tasks} />
    </div>
  );
};
export default App;
