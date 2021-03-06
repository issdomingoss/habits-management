import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory, Redirect } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/logo_Speak_Tracks.PNG";
import img_register_desktop from "../../assets/image 5.png";
import { toast } from "react-toastify";

import {
  ContainerBackGround,
  Form,
  Img,
  ContainerInputs,
  Title,
  ButtonCreateAccount,
  ContainerDesktop,
  ContainerImgRegister,
} from "./style";

//jsx
//====================================================================================================
const PageRegister = ({ AuthN }) => {
  //validacoes
  //----------------------------------------------------------------------------------------------
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Minimum 3 characters!")
      .matches(/^[a-zA-Z]+$/, "It must only contain letters!")
      .required("Required field!"),
    email: yup.string().email("Invalid email!").required("Required field!"),
    password: yup
      .string()
      .min(8, "Minimum 8 characteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain at least one capital letter, one number and one special character!"
      )
      .required("Required field!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match!"),
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
    const { username, email, password } = data;
    const sendToAPI = { username, email, password };

    api
      .post("/users/", sendToAPI)
      .then((response) => {
        toast.success("Register successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
        history.push("/login");
      })
      .catch(() => {
        toast.error("Email or username already exists!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  //if AuthN true redirect to dashboard
  if (AuthN) {
    return <Redirect to="/dashboard" />;
  }

  //return do jsx
  //================================================================================================
  return (
    <ContainerBackGround>
      {/* add link para to PageHome */}
      <Link to="/">
        <Img alt="img_logo" src={logo} />
      </Link>

      <ContainerDesktop>
        <ContainerImgRegister>
          <img alt="img_register_desktop" src={img_register_desktop} />
        </ContainerImgRegister>

        <Form onSubmit={handleSubmit(handleMyForm)}>
          <Title>Sign Up</Title>

          <ContainerInputs>
            <label>Username:</label>
            <input type="text" {...register("username")} />
            <span>{errors.username?.message}</span>
          </ContainerInputs>
          <ContainerInputs>
            <label>Email:</label>
            <input type="text" {...register("email")} />
            <span>{errors.email?.message}</span>
          </ContainerInputs>
          <ContainerInputs>
            <label>Password:</label>
            <input type="password" {...register("password")} />
            <span>{errors.password?.message}</span>
          </ContainerInputs>
          <ContainerInputs>
            <label>Confirm Password:</label>
            <input type="password" {...register("confirmPassword")} />
            <span>{errors.confirmPassword?.message}</span>
          </ContainerInputs>

          <div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>

          <div>
            <ButtonCreateAccount type="submit">
              Create an Account
            </ButtonCreateAccount>
          </div>
        </Form>
      </ContainerDesktop>
    </ContainerBackGround>
  );
};

export default PageRegister;
