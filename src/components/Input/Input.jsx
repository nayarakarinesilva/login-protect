import { TextField } from "@mui/material";
import React from "react";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
