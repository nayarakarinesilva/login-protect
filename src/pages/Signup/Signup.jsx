import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email || !password || !confirmEmail) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== confirmEmail) {
      setError("Os E-mails não são iguais");
      return;
    }
    const res = signup(email, password);
    console.log(" res no cadastro", res);
    if (res) {
      setError(res);
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
          Cadastre-se
        </Typography>
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
        {error}
        <Box>
          <Box>
            <CustomButton text="Inscrever" onClick={handleSignup} />
          </Box>
          <Typography>Não tem senha</Typography>
          <Link to="/signin">Voltar</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
