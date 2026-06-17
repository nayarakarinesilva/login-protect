import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../../components/CustomButton/CustomButton";
import Title from "../../components/Title/Title";
import AuthLayout from "../../components/AuthLayout/AuthLayout";

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
    <AuthLayout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Title text="Bem-vindo 👋" />
        <Typography
          sx={{
            color: "#6b7280",
            mt: 1,
          }}
        >
          Faça login para acessar seu painel
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          width: "300px",
          marginBottom: "10px",
        }}
      >
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
      </Box>
      <Box>
        <Typography sx={{ color: "red" }}> {error}</Typography>
      </Box>
      <Box>
        <Box>
          <CustomButton text="Entrar" onClick={handleLogin} />
        </Box>
        <Box sx={{ marginTop: "30px", textAlign: "center" }}>
          <Typography
            sx={{
              color: "#6b7280",
            }}
          >
            Não tem conta?
          </Typography>

          <Typography>
            <Link
              to="/signin"
              style={{
                color: "#7C3AED",
                fontWeight: 500,
              }}
              to="/signup"
            >
              Criar conta
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default Signin;
