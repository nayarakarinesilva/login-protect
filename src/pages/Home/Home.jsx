import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Home = () => {
  const { user, signout } = useAuth();
  const nameWelcome = user?.name;

  const navigate = useNavigate();
  return (
    <Box sx={{ background: "#ffffffbe" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>Olá, {nameWelcome}.</Typography>
          <Typography>Seja bem vindo(a)!</Typography>
        </Box>
        <Box>
          <CustomButton
            text="Sair"
            onClick={() => [signout(), navigate("/")]}
            icon={<ExitToAppIcon />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
