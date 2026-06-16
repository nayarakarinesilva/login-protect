import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Input = ({ type, placeholder, value, onChange, label }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          color: "#7C3AED",
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default Input;
