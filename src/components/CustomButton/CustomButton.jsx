import { Button } from "@mui/material";
import React from "react";

const CustomButton  = ({ text, onClick }) => {
  return (
    <Button
      sx={{ background: "#152974", color: "#fff" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton ;
