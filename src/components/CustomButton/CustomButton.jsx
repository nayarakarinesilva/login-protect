import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ text, onClick, icon: Icon }) => {
  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "150px",
        background: "#a28aff",
        color: "#fff",
        fontWeight: 600,
        fontSize: "16px",
        borderRadius: "8px",
        "&:hover": {
          background: "#bbacf8",
        },
      }}
      onClick={onClick}
    >
      {text}
      {Icon}
    </Button>
  );
};

export default CustomButton;
