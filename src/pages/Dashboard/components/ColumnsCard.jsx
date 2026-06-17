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
        width: 320,
        height: "70vh",
        overflowY: "auto",

        backgroundColor: "#ffffff73",
        
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",

        padding: "10px",
        gap: "10px",
        transition: "0.2s",

        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
      onDrop={() => handleDrop(title)}
      onDragOver={(e) => e.preventDefault()}
    >
      <Box
        sx={{
          backgroundColor: color,
          color: "#fff",
          p: 1.5,
          borderRadius: "8px 8px 0 0",
          margin: "-10px -10px 0 -10px",
        }}
      >
        <Typography fontWeight="bold">
          {title} ({tasks.length})
        </Typography>
      </Box>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          text={task.title}
          task={task}
          color={color}
          setDraggedTask={setDraggedTask}
          handleDelete={handleDelete}
          draggedTask={draggedTask}
        />
      ))}
    </Box>
  );
};

export default ColumnsCard;
