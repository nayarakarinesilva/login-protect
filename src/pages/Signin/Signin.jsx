import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../../components/CustomButton/CustomButton";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha os campos");
      return;
    }
    const res = signin(email, password);
    console.log(" res no login", res);

    if (res) {
      setError(res);
      return;
    }
    navigate("/home");
  };
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
          gap: 5,
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
          Sistema de Login
        </Typography>
        <Input
          label="E-mail"
          type="email"
          placeholder={"E-mail"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          placeholder={"Senha"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error}
        <Box>
          <Box>
            <CustomButton text="Entrar" onClick={handleLogin} />
          </Box>
          <Typography>Não tem senha</Typography>
          <Link to="/signup">Registre-se</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
