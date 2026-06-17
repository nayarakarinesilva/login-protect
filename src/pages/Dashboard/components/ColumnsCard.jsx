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
  const statusColors = {
    todo: "#9c1ac4",
    doing: "#068d82",
    done: "#bd0d79",
  };

  const color = statusColors[title.toLowerCase()];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "auto",
        border: "1px solid #ccc",
        borderTop: `24px solid ${color} `,
        borderRadius: "10px",
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
          color={color}
          setDraggedTask={setDraggedTask}
          handleDelete={handleDelete}
        />
      ))}
    </Box>
  );
};

export default ColumnsCard;
