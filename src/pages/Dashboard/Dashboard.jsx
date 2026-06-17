import { Box, Divider, Typography } from "@mui/material";
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

  const handleAddTaskValidation = () => {
    if (!titleTask.trim()) return;
    handleAddTask();
  };

  console.log("titleTask", titleTask);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #f8b4d9 0%, #c4b5fd 50%, #60a5fa 100%)",
      }}
    >
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: 800,
            color: "#fff",
            textShadow: "0 2px 12px rgba(0,0,0,0.15)",
          }}
        >
          Meu Kanban
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          width: "70%",
          p: 2,
          backgroundColor: "#fff",
          borderRadius: 3,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          mb: 1,
        }}
      >
        <Input
          placeholder="Digite o título da task"
          type="text"
          value={titleTask}
          onChange={(e) => setTitleTask(e.target.value)}
        />
        <CustomButton text="Adicionar +" onClick={handleAddTaskValidation} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "900px",
          gap: 3,
          p: 1,
        }}
      >
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
