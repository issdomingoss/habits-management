import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import logo from "../../assets/logo_Speak_Tracks.PNG";
import img_login from "../../assets/image 4.png";
import img_desktop from "../../assets/image 3.png";
import api from "../../services/api";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

import {
  ContainerBackGround,
  Form,
  ContainerInputLogin,
  ImgLogo,
  ButtonLogin,
  ImgLogin,
  ContainerDesktop,
  ContainerImgDesktop,
} from "./style";

//jsx
//====================================================================================================
const PageLogin = () => {
  const { getToken } = useContext(HabitsContext);

  //validacoes
  //----------------------------------------------------------------------------------------------
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Minimum 3 characters!")
      .matches(/^[a-zA-Z]+$/, "It must only contain letters!")
      .required("Required field!"),
    password: yup
      .string()
      .min(8, "Minimum 8 characteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Minimum one letter, number and special character!"
      )
      .required("Required field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  //funcao de requisicao da api
  //------------------------------------------------------------------------------------------------
  const history = useHistory();

  const handleMyForm = (data) => {
    const { username, password } = data;
    const sendToAPI = { username, password };

    api
      .post("/sessions/", sendToAPI)
      .then((response) => {
        reset();

        localStorage.setItem("token", JSON.stringify(response.data.access));
        getToken(response.data.access);

        history.push("/dashboard");
      })
      .catch((e) => console.log(e));
  };

  //return do jsx
  //================================================================================================
  return (
    <ContainerBackGround>
      <Link to="/">
        <ImgLogo alt="img_logo" src={logo} />
      </Link>

      <ContainerDesktop>
        <ContainerImgDesktop>
          <img alt="img_desktop" src={img_desktop} />
        </ContainerImgDesktop>

        <Form onSubmit={handleSubmit(handleMyForm)}>
          <h2>Sign In</h2>

          <ImgLogin alt="img_logo" src={img_login} />

          <ContainerInputLogin>
            <label>Username:</label>
            <input type="text" {...register("username")} />
            <span>{errors.username?.message}</span>
          </ContainerInputLogin>

          <ContainerInputLogin>
            <label>Password:</label>
            <input type="password" {...register("password")} />
            <span> {errors.password?.message}</span>
          </ContainerInputLogin>

          <div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>

          <div>
            <ButtonLogin type="submit">Login</ButtonLogin>
          </div>
        </Form>
      </ContainerDesktop>
    </ContainerBackGround>
  );
};

export default PageLogin;
