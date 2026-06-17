import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import Input from "../../components/Input/Input";
import useTaskManager from "./hooks/useTaskManager";
import ColumnsCard from "./components/ColumnsCard";

const Dashboard = () => {
  const columns = ["Todo", "Doing", "Done"];
  const {
    tasks,
    titleTask,
    setTitleTask,
    draggedTask,
    setDraggedTask,
    handleAddTask,
    handleDelete,
    handleDrop,
  } = useTaskManager();

  return (
    <Box>
      <Box>
        <Typography>Bem vindo ao quadro Kanban</Typography>
      </Box>
      <Input
        label="Digite o título da task"
        placeholder="Digite o título da task"
        type="text"
        value={titleTask}
        onChange={(e) => setTitleTask(e.target.value)}
      />
      <CustomButton text="Adicionar +" onClick={handleAddTask} />

      <Box sx={{ display: "flex", height: "80vh", gap:"15px" }}>
        {columns.map((colum) => {
          // filtra só as tasks daquela coluna
          const columFilter = tasks.filter((task) => task.status === colum);
          return (
            <ColumnsCard
              key={colum}
              title={colum} // tasks já filtradas da coluna
              tasks={columFilter} // função para adicionar task
              handleAddTask={handleAddTask} // salva qual task está sendo arrastada
              setDraggedTask={setDraggedTask} // estado da task sendo arrastada (opcional agora)
              draggedTask={draggedTask} // quando soltar a task na coluna
              handleDrop={handleDrop}
              handleDelete={handleDelete}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Dashboard;
