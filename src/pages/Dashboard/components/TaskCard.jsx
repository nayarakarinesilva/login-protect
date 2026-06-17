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
}) => {
  return (
    <Box
      draggable
      onDragStart={() => setDraggedTask(task)}
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        border: `solid 1px ${color}`,
        height: "80px",
        padding: "15px",
        cursor: "pointer",
      }}
    >
      <Typography>{text}</Typography>
      <Typography onClick={() => handleDelete(task.id)}>
        <DeleteForeverIcon sx={{ color: "#896dfc" }} />
      </Typography>
    </Box>
  );
};

export default TaskCard;
