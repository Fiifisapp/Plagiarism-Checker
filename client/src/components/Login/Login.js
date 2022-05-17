import React from "react";
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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
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
    console.log({ data });
    reset();

    
    // navigate("/dashboard")
  };
  

  return (
    <div>
      <LogoContainer className="logo-container">
        <Logo src={logo} alt="" />
      </LogoContainer>
      <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
        <LoginHeader>Lets sign you in.</LoginHeader>

        
        <Input
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>

        
        <Input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>

        <Button type="submit">Login</Button>
      </FormContainer>
    </div>
  );
};

export default Login;
