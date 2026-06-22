import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_db");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email,
      );

      //Se for o mesmo email do token vai setar o usuário
      if (hasUser?.length) {
        setUser(hasUser[0]);
      }
    }
  }, []);

  //Login
  const signin = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db"));
    const hasUser = userStorage?.filter((user) => user.email === email);

    if (!hasUser?.length) {
      return "Usuário não cadastrado";
    }

    if (hasUser[0].password !== password) {
      return "E-mail ou senha incorretos";
    }

    const token = Math.random().toString(36).substring(2);

    localStorage.setItem("user_token", JSON.stringify({ email, token }));

    setUser(hasUser[0]);
  };

  //Cadastro
  const signup = (email, password, name) => {
    const userStorage = JSON.parse(localStorage.getItem("user_db"));

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse e-mail cadastrada.";
    }
    let newUser;
    //Caso já tenha ele junta
    if (userStorage) {
      newUser = [...userStorage, { email, password, name }];
    } else {
      newUser = [{ email, password, name }];
    }
    // console.log("Salvando:", newUser);
    localStorage.setItem("user_db", JSON.stringify(newUser));
    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
