import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../../components/CustomButton/CustomButton";
import Title from "../../components/Title/Title";

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
        <Title text="Login" />
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
            <Typography>Não tem conta?</Typography>

            <Typography>
              <Link
                to="/signin"
                style={{
                  color: "#7C3AED",
                  fontWeight: 500,
                }}
                to="/signup"
              >
                Registre-se
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signin;
