import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import useAuth from "../../hooks/useAuth";
import Title from "../../components/Title/Title";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const {
    handleChange,
    form,
    setTouched,
    touched,
    errorMessages,
    errors,
    handleSignup,
    error,
  } = useSignup();

  return (
    <AuthLayout>
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
          name={"name"}
          value={form.name}
          onChange={handleChange}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          msgError={touched.name && errors.name ? errorMessages.name : ""}
        />

        <Input
          label="E-mail"
          type="email"
          placeholder={"E-mail"}
          name={"email"}
          value={form.email}
          onChange={handleChange}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          msgError={touched.email && errors.email ? errorMessages.email : ""}
        />
        <Input
          label="Confirmar e-mail"
          type="email"
          placeholder={"Cofirme e-mail"}
          name={"confirmEmail"}
          value={form.confirmEmail}
          onChange={handleChange}
          onBlur={() => setTouched((prev) => ({ ...prev, confirmEmail: true }))}
          msgError={
            touched.confirmEmail && errors.confirmEmail
              ? errorMessages.confirmEmail
              : ""
          }
        />
        <Input
          label="Senha"
          type="password"
          placeholder={"Senha"}
          name={"password"}
          value={form.password}
          onChange={handleChange}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          msgError={
            touched.password && errors.password ? errorMessages.password : ""
          }
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
    </AuthLayout>
  );
};

export default Signup;
