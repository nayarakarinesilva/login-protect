import { Box, Typography } from "@mui/material";
import React from "react";

const Signin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 10,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          gap: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          boxShadow: "0 1px 2px #0003",
          background: "#fff",
          maxWidth: "350px",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: 600, color: "#676767" }}
        >
          outro
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#676767" }}>
        Signin
      </Typography>
    </Box>
  );
};

export default Signin;
