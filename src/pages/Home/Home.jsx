import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import CustomButton from "../../components/CustomButton/CustomButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  const { user, signout } = useAuth();
  const nameWelcome = user?.name;

  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ background: "#a28aff" }}>
            {nameWelcome?.charAt(0).toUpperCase()}
          </Avatar>

          <Box sx={{ color: "#333" }}>
            <Typography variant="h6" fontWeight="bold">
              Olá, {nameWelcome}
            </Typography>

            <Typography variant="body2">
              Gerencie suas tarefas de forma simples e eficiente
            </Typography>
          </Box>
        </Box>
        <Box>
          <CustomButton
            text="Sair"
            onClick={() => {
              signout();
              navigate("/");
            }}
            icon={<ExitToAppIcon />}
          />
        </Box>
      </Box>
      <Dashboard />
    </Box>
  );
};

export default Home;
