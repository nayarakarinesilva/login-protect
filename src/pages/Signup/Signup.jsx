import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import useAuth from "../../hooks/useAuth";
import Title from "../../components/Title/Title";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email || !password || !confirmEmail || !name) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== confirmEmail) {
      setError("Os E-mails não são iguais");
      return;
    }
    const errorMessage = signup(email, password, name);
    console.log(" res no cadastro", errorMessage);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    alert("Usuário cadastrado com sucesso!");
    navigate("/");
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
          boxShadow: "0 1px 2px #0003",
          background: "#fff",
          maxWidth: "350px",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Title text="Cadastrar Conta" />
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
            label="Nome"
            type="text"
            placeholder={"Nome"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="E-mail"
            type="email"
            placeholder={"E-mail"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Confirmar e-mail"
            type="email"
            placeholder={"E-mail"}
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            placeholder={"Senha"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>

        <Typography sx={{ color: "red" }}> {error}</Typography>
        <Box>
          <Box>
            <CustomButton text="Cadastrar" onClick={handleSignup} />
          </Box>
          <Box sx={{ marginTop: "30px", textAlign: "center" }}>
            <Typography>
              <Link
                to="/signin"
                style={{
                  color: "#7C3AED",
                  fontWeight: 500,
                }}
                to="/signin"
              >
                Fazer Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
