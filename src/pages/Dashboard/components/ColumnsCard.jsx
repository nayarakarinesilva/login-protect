import { Box, Typography } from "@mui/material";
import React from "react";
import useTaskManager from "../hooks/useTaskManager";
import TaskCard from "./TaskCard";

const ColumnsCard = ({
  title,
  tasks,
  handleAddTask,
  setDraggedTask,
  draggedTask,
  handleDrop,
  handleDelete,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "auto",
        border: "1px solid #ccc",
        width: "250px",
        padding: "10px",
        gap: "10px",
      }}
      onDrop={() => handleDrop(title)}
      onDragOver={(e) => e.preventDefault()}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{title}</Typography>
      </Box>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          text={task.title}
          task={task}
          setDraggedTask={setDraggedTask}
          handleDelete={handleDelete}
        />
      ))}
    </Box>
  );
};

export default ColumnsCard;
