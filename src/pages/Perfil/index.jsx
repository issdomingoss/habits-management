import { ContainerPerfil, CardPerfil, ContainerForm } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEdit } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import api from "../../services/api";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import Header from "../../components/header";
import { Redirect } from "react-router-dom";

const PerfilPage = ({ AuthN }) => {

  const [user, setUser] = useState("");
  const [token] = useState(JSON.parse(localStorage.getItem("token")) || '');
  const [isModal, setIsModal] = useState(false);
  const [info, setInfo] = useState(
    jwt_decode(JSON.parse(localStorage.getItem("token")))
  );

  const updateUser = (newData) => {
    api
      .patch(`/users/${info.user_id}/`, newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api
      .get(`/users/${info.user_id}/`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, []);


  const schema = yup.object().shape({
    username: yup.string().required("Required name!"),
    email: yup
      .string()
      .required("Required email!")
      .email("Invalid email format"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    const newData = {
      username: data.username,
      email: data.email,
    };
    updateUser(newData);
    setIsModal(false);
  };

  const ismodalTrue = () => {
    setIsModal(true);
  };

  const ismodalFalse = () => {
    setIsModal(false);
  };
 

  return (
    <>
      <ContainerPerfil isModal={isModal}>
        <Header />
        {isModal === false ? (
          <CardPerfil>
            <div className="containerIcon">
              <button onClick={ismodalTrue}>
                <AiFillEdit className="editIcon" />
              </button>
            </div>
            <div className="userImgContainer">
              <FaUserAlt className="userImg" />
            </div>
            <div>
              <h2>User: {user.username}</h2>
              <div>{user.email}</div>
            </div>
          </CardPerfil>
        ) : (
          <ContainerForm>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <label>User:</label>
              <input placeholder="nome" {...register("username")} />
              <label>E-mail:</label>
              <input placeholder="email" {...register("email")} />
              <button type="submit">Update</button>
              <button onClick={ismodalFalse}>Cancel</button>
            </form>
          </ContainerForm>
        )}
      </ContainerPerfil>
    </>
  );
};

export default PerfilPage;
