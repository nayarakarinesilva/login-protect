import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding:"20px" }}>
      <Typography>Home</Typography>
      <CustomButton text="Sair" onClick={() => [signout(), navigate("/")]} />
    </Box>
  );
};

export default Home;
