import { useState } from "react";

export default function useTaskManager() {
  const [draggedTask, setDraggedTask] = useState(null);
  const [titleTask, setTitleTask] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", status: "Todo" },
    { id: 2, title: "Estudar JavaScript", status: "Doing" },
  ]);

  //Adiconar task
  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: titleTask.trim(),
      status: "Todo",
    };
    setTasks([...tasks, newTask]);

    setTitleTask("");
  };

  //DROP (quando solta a task em outra coluna)
  const handleDrop = (status) => {
    if (!draggedTask) return;

    // percorre todas as tasks e atualiza apenas a que foi arrastada
    const updateTasks = tasks.map((task) =>
      task.id === draggedTask.id ? { ...task, status } : task,
    );
    //Atualiza estado da task arrastada
    setTasks(updateTasks);

    // limpa o estado do drag (reset)
    setDraggedTask(null);
  };

  const handleDelete = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  };

  return {
    tasks,
    titleTask,
    setTitleTask,
    draggedTask,
    setDraggedTask,
    handleAddTask,
    handleDelete,
    handleDrop,
  };
}
