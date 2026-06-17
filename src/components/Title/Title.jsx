import { Typography } from "@mui/material";
import React from "react";

const Title = ({text}) => {
  return (
    <Typography sx={{ fontSize: "26px", fontWeight: 600, color: "#a28aff" }}>
      {text}
    </Typography>
  );
};

export default Title;
