import { Box } from "@mui/material";
import React from "react";

const AuthLayout = ({children}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 10,
        height: "100vh",
        background: `linear-gradient(
      135deg,
      #F9A8D4,
      #E9A8FF,
      #C4B5FD,
      #93C5FD,
      #60A5FA
    )`,
      }}
    >
      <Box
        sx={{
          gap: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
          p: 4,
          maxWidth: "500px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
