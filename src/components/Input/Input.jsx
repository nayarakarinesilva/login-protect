import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const Input = ({ type, placeholder, value, onChange, label }) => {
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default Input;
