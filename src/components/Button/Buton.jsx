import { Button } from "@mui/material";
import React from "react";

const Buton = ({ text, onClick, type = "button" }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Buton;
