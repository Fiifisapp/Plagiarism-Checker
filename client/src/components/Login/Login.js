import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from "../../assets/logo.png";
import {
  LogoContainer,
  Logo,
  FormContainer,
  Input,
  LoginHeader,
  ErrorMessage,
  Button,
} from "./Login.Style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().min(8).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  const postData = (data) => {
    axios.post(`https://6286d96de9494df61b2e3243.mockapi.io/CrudData`, {
    name,  
    email,
      password
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    reset();
    navigate("/dashboard");
  };

  

  return (
    <div>
      <LogoContainer className="logo-container">
        <Logo src={logo} alt="" onClick={() => navigate("/")}/>
      </LogoContainer>
      <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <LoginHeader>Lets sign you in.</LoginHeader>

        <Input
          {...register("name")}
          placeholder="Please enter your name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Input
          {...register("email")}
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        <Input
          {...register("password")}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <Button type="submit" onClick={postData}>Login</Button>
      </FormContainer>
    </div>
  );
};

export default Login;
