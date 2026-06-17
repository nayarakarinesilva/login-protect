import { Box, Typography } from "@mui/material";
import React from "react";
import useTaskManager from "../hooks/useTaskManager";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const TaskCard = ({
  icon: Icon,
  text,
  task,
  setDraggedTask,
  handleDelete,
  color,
  draggedTask,
}) => {
  return (
    <Box
      draggable
      onDragStart={() => setDraggedTask(task)}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",

        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",

        border: "none",
        borderLeft: `4px solid ${color}`,
        height: "80px",
        padding: "15px",
        cursor: "pointer",
        borderRadius: "8px",
        opacity: draggedTask?.id === task.id ? 0.5 : 1,
      }}
    >
      <Typography>{text}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent:"center",
          borderRadius: "50%",
          background: "#f3f3f3",
          width: "40px",
          height: "40px",
        }}
      >
        <Typography onClick={() => handleDelete(task.id)}>
          <DeleteForeverIcon sx={{ color: ` ${color}` }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default TaskCard;
